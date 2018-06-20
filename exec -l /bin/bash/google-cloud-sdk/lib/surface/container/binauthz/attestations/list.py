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
"""The List command for Binary Authorization signatures."""

from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from googlecloudsdk.api_lib.container import binauthz_util as binauthz_api_util
from googlecloudsdk.api_lib.container.binauthz import authorities
from googlecloudsdk.calliope import base
from googlecloudsdk.command_lib.container.binauthz import binauthz_util as binauthz_command_util
from googlecloudsdk.command_lib.container.binauthz import flags as binauthz_flags
from googlecloudsdk.core import resources


class List(base.ListCommand):
  r"""List Binary Authorization attestations.

  This command lists Binary Authorization attestations for your project.
  Command line flags specify which artifact to list the attestations for.
  If no artifact is specified, then this lists all URLs with associated
  occurrences.

  ## EXAMPLES

  List all artifact URLs for which an attestation exists and is bound to the
  passed attestation authority:

      $ {command} \
          --attestation-authority=projects/foo/attestationAuthorities/bar

  List the (pgp_key_fingerprint, signature) pairs for all attestations for the
  passed artifact-url bound to the passed attestation authority:

      $ {command} \
          --attestation-authority=projects/foo/attestationAuthorities/bar \
          --artifact-url='gcr.io/foo/example-image@sha256:abcd'
  """

  @staticmethod
  def Args(parser):
    binauthz_flags.AddListAttestationsFlags(parser)

  def Run(self, args):
    normalized_artifact_url = None
    if args.artifact_url:
      normalized_artifact_url = binauthz_command_util.NormalizeArtifactUrl(
          args.artifact_url)

    note_ref = args.CONCEPTS.attestation_authority_note.Parse()
    if note_ref is None:
      authority_ref = args.CONCEPTS.attestation_authority.Parse()
      authority = authorities.Client().Get(authority_ref)
      # TODO(b/79709480): Add other types of authorities if/when supported.
      note_ref = resources.REGISTRY.ParseResourceId(
          'containeranalysis.projects.notes',
          authority.userOwnedDrydockNote.noteReference, {})

    client = binauthz_api_util.ContainerAnalysisClient()

    if normalized_artifact_url:
      return client.YieldPgpKeyFingerprintsAndSignatures(
          note_ref=note_ref,
          artifact_url=normalized_artifact_url,
      )
    else:
      return client.YieldUrlsWithOccurrences(note_ref)
