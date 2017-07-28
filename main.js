/*******************************************************************************
 *Copyright (C) 2017 FBK.
 *All rights reserved. This program and the accompanying materials
 *are made available under the terms of the Eclipse Public License v1.0
 *which accompanies this distribution, and is available at
 *http://www.eclipse.org/legal/epl-v10.html
 *
 *Contributors:
 *    FBK - initial API and implementation
 ******************************************************************************/
(function(Application, GUI, Dialogs, Utils, API, VFS) {
  'use strict';

  /////////////////////////////////////////////////////////////////////////////
  // APPLICATION
  /////////////////////////////////////////////////////////////////////////////

  function ApplicationNodeRed(args, metadata) {
    Application.apply(this, ['ApplicationNodeRed', args, metadata, {
      src: '',
      title: metadata.name,
      icon: metadata.icon,
      width: 960,
      height: 640,
      allow_resize: true,
      allow_restore: true,
      allow_maximize: true
    }]);

    var src = document.location.protocol + "//" + document.location.hostname + ":1880" + "/red-agile/?token="+localStorage.getItem("agile_token");
    this.options.src = src;
  }

  ApplicationNodeRed.prototype = Object.create(Application.prototype);

  /////////////////////////////////////////////////////////////////////////////
  // EXPORTS
  /////////////////////////////////////////////////////////////////////////////

  OSjs.Applications = OSjs.Applications || {};
  OSjs.Applications.ApplicationNodeRed = OSjs.Applications.ApplicationNodeRed || {};
  OSjs.Applications.ApplicationNodeRed.Class = ApplicationNodeRed;

})(OSjs.Helpers.IFrameApplication, OSjs.GUI, OSjs.Dialogs, OSjs.Utils, OSjs.API, OSjs.VFS);
