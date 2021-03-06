// Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
// Licensed under the Universal Permissive License v 1.0 as shown at http://oss.oracle.com/licenses/upl.

define('Example.ExamplePageTypes.AboutUs.Collection'
, [
    'Backbone'
  , 'Example.ExamplePageTypes.AboutUs.Model'
  , 'underscore'
  ]
, function
  (
    Backbone
  , AboutUsModel
  , _
  )
{
  'use strict';

  return Backbone.Collection.extend({
    url: _.getAbsoluteUrl(getExtensionAssetsPath('services/AboutUs.Service.ss'))
  , model: AboutUsModel
  })
})