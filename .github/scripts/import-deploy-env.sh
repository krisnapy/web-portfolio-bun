#!/bin/bash

set -euo pipefail

echo "$DEPLOY_ENV" | base64 --decode > .env.production
