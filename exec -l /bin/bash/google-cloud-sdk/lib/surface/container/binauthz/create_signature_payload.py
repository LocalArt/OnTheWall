# Copyright 2017 Google Inc. All Rights Reserved.
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
"""The CreateSignaturePayload command for Binary Authorization signatures."""

from __future__ import absolute_import
from __future__ import unicode_literals

from googlecloudsdk.calliope import base
from googlecloudsdk.command_lib.container.binauthz import binauthz_util as binauthz_command_util
from googlecloudsdk.command_lib.container.binauthz import flags as binauthz_flags


class CreateSignaturePayload(base.Command):
  r"""Create a JSON container image signature object.

  Given a container image URL specified by the manifest digest, this command
  will produce a JSON object whose signature is expected by Cloud Binary
  Authorization.

  ## EXAMPLES

  To output serialized JSON to sign, run:

      $ {command} \
          --artifact-url="gcr.io/example-project/example-image@sha256:abcd"
  """

  @staticmethod
  def Args(parser):
    binauthz_flags.AddArtifactUrlFlag(parser)
    parser.display_info.AddFormat('json')

  def Run(self, args):
    return binauthz_command_util.MakeSignaturePayload(args.artifact_url)
