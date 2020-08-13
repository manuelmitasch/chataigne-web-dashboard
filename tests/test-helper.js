import Application from 'chataigne-web-dashboard/app';
import config from 'chataigne-web-dashboard/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
