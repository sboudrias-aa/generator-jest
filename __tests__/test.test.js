'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const jestGenerator = path.join(__dirname, '../generators/test');

describe('generator-jest:test', function () {
  it('create test files and generate a default component name', function () {
    return helpers.run(jestGenerator)
      .withArguments('js/components/some-sidebar.jsx')
      .then(function () {
        assert.file('js/components/__tests__/SomeSidebar.test.jsx');
        assert.fileContent(
          'js/components/__tests__/SomeSidebar.test.jsx',
          'const SomeSidebar = require(\'../some-sidebar.jsx\')'
        );
      });
  });

  it('allows defining custom component name', function () {
    return helpers.run(jestGenerator)
      .withArguments('js/slider.js')
      .withOptions({componentName: 'OtherName'})
      .then(function () {
        assert.file('js/__tests__/OtherName.test.js');
        assert.fileContent(
          'js/__tests__/OtherName.test.js',
          'const OtherName = require(\'../slider.js\')'
        );
      });
  });
});
