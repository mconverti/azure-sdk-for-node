/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the LinuxConfiguration class.
 * @constructor
 * Describes Windows Configuration of the OS Profile.
 * @member {boolean} [disablePasswordAuthentication] Gets or sets whether
 * Authentication using user name and password is allowed or not
 * 
 * @member {object} [ssh] Gets or sets the SSH configuration for linux VMs
 * 
 * @member {array} [ssh.publicKeys] Gets or sets the list of SSH public keys
 * used to authenticate with linux based VMs
 * 
 */
function LinuxConfiguration(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.disablePasswordAuthentication !== undefined) {
      this.disablePasswordAuthentication = parameters.disablePasswordAuthentication;
    }
    if (parameters.ssh) {
      this.ssh = new models['SshConfiguration'](parameters.ssh);
    }
  }    
}


/**
 * Validate the payload against the LinuxConfiguration schema
 *
 * @param {JSON} payload
 *
 */
LinuxConfiguration.prototype.serialize = function () {
  var payload = {};
  if (this['disablePasswordAuthentication'] !== null && this['disablePasswordAuthentication'] !== undefined) {
    if (typeof this['disablePasswordAuthentication'] !== 'boolean') {
      throw new Error('this[\'disablePasswordAuthentication\'] must be of type boolean.');
    }
    payload['disablePasswordAuthentication'] = this['disablePasswordAuthentication'];
  }

  if (this['ssh']) {
    payload['ssh'] = this['ssh'].serialize();
  }

  return payload;
};

/**
 * Deserialize the instance to LinuxConfiguration schema
 *
 * @param {JSON} instance
 *
 */
LinuxConfiguration.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['disablePasswordAuthentication'] !== undefined) {
      this['disablePasswordAuthentication'] = instance['disablePasswordAuthentication'];
    }

    if (instance['ssh']) {
      this['ssh'] = new models['SshConfiguration']().deserialize(instance['ssh']);
    }
  }

  return this;
};

module.exports = LinuxConfiguration;