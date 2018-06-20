# Copyright 2016 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Cloud Pub/Sub subscriptions update command."""

from __future__ import absolute_import
from __future__ import unicode_literals

from googlecloudsdk.api_lib.pubsub import subscriptions
from googlecloudsdk.api_lib.util import exceptions
from googlecloudsdk.calliope import base
from googlecloudsdk.command_lib.pubsub import flags
from googlecloudsdk.command_lib.pubsub import resource_args
from googlecloudsdk.command_lib.pubsub import util
from googlecloudsdk.command_lib.util.args import labels_util
from googlecloudsdk.core import log


@base.ReleaseTracks(base.ReleaseTrack.ALPHA)
class UpdateAlpha(base.UpdateCommand):
  """This feature is part of an invite-only release of the Cloud Pub/Sub API.

  Updates an existing Cloud Pub/Sub subscription.
  This feature is part of an invitation-only release of the underlying
  Cloud Pub/Sub API. The command will generate errors unless you have access to
  this API. This restriction should be relaxed in the near future. Please
  contact cloud-pubsub@google.com with any questions in the meantime.
  """

  @classmethod
  def Args(cls, parser):
    resource_args.AddSubscriptionResourceArg(parser, 'to update.')
    flags.AddSubscriptionSettingsFlags(parser, cls.ReleaseTrack(),
                                       is_update=True)

    labels_util.AddUpdateLabelsFlags(parser)

  @exceptions.CatchHTTPErrorRaiseHTTPException()
  def Run(self, args):
    """This is what gets called when the user runs this command.

    Args:
      args: an argparse namespace. All the arguments that were provided to this
        command invocation.

    Returns:
      A serialized object (dict) describing the results of the operation.
      This description fits the Resource described in the ResourceRegistry under
      'pubsub.projects.subscriptions'.

    Raises:
      An HttpException if there was a problem calling the
      API subscriptions.Patch command.
    """
    client = subscriptions.SubscriptionsClient()
    subscription_ref = args.CONCEPTS.subscription.Parse()

    labels_update = labels_util.ProcessUpdateArgsLazy(
        args, client.messages.Subscription.LabelsValue,
        orig_labels_thunk=lambda: client.Get(subscription_ref).labels)
    try:
      result = client.Patch(
          subscription_ref,
          ack_deadline=args.ack_deadline,
          push_config=util.ParsePushConfig(args.push_endpoint),
          retain_acked_messages=args.retain_acked_messages,
          labels=labels_update.GetOrNone(),
          message_retention_duration=args.message_retention_duration)
    except subscriptions.NoFieldsSpecifiedError:
      if not any(args.IsSpecified(arg) for arg in ('clear_labels',
                                                   'update_labels',
                                                   'remove_labels')):
        raise
      log.status.Print('No update to perform.')
      result = None
    else:
      log.UpdatedResource(subscription_ref.RelativeName(), kind='subscription')
    return result
