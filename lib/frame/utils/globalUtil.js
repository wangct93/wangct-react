"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfig = getConfig;
exports.setConfig = setConfig;
var globalConfig = window.globalConfig || {};
window.globalConfig = globalConfig;
/**
 * 获取全局配置
 */

function getConfig(key) {
  return key ? globalConfig[key] : globalConfig;
}
/**
 * 设置全局配置
 * @param key
 * @param value
 */


function setConfig(key, value) {
  globalConfig[key] = value;
}