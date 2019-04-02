#!/bin/sh

set -e
set +x

Install() {
    if [ -d './node_modules' ]; then
        echo "Uninstalling dependencies"
        rm -rf ./node_modules
        mkdir node_modules
    fi

    echo "Installing direct ${1} for app"
    mkdir node_modules/direct
    cp registry/direct/${1}/* node_modules/direct/

    echo "Installing shared ${2} for app"
    mkdir node_modules/shared
    cp registry/shared/${2}/* node_modules/shared/

    if [ "${2}" != "${3}" ]; then
        echo "Installing shared ${3} for lib"
        mkdir -p node_modules/direct/node_modules/shared
        cp registry/shared/${3}/* node_modules/direct/node_modules/shared/
    fi
}

VDIRECT="${1:-1.0.0}"
VSHAREDAPP="${2:-1.0.0}"
VSHAREDLIB="${3:-1.0.0}"

Install "${VDIRECT}" "${VSHAREDAPP}" "${VSHAREDLIB}"
echo "Running app"
node app.js

if [ $# -eq 0 ]; then
    Install "1.0.1" "1.0.0" "1.1.0"
    echo "Running app"
    node app.js
fi
