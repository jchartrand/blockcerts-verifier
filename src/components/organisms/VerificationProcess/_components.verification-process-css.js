import {html} from '@polymer/lit-element';
export default html`<style>.buv-c-verification-process{position:relative;display:table}.buv-c-verification-progress-bar{padding-top:0;position:absolute;left:0;top:0;background-color:#2ab27b;width:14px;border-radius:7px;margin:2px 0;box-sizing:content-box;-webkit-transition:height .4s ease-in-out, padding-top .4s ease-in;-moz-transition:height .4s ease-in-out, padding-top .4s ease-in;-o-transition:height .4s ease-in-out, padding-top .4s ease-in;transition:height .4s ease-in-out, padding-top .4s ease-in;min-height:100%;display:table-cell}.buv-c-verification-progress-bar.has-errored{background-color:#d0021b}.buv-c-verification-progress-bar.is-test{background-color:#d8d8d8}.buv-c-verification-progress-bar.no-transition{-webkit-transition:none;-moz-transition:none;-o-transition:none;transition:none}.buv-c-verification-process__step-list{padding-left:33px;display:table-cell;min-width:200px}:host .step .loading-txt,:host .step.starting>a,:host .step.starting .sub-steps{display:none}:host .step.starting .loading-txt{display:block}:host .step.opened .sub-steps{height:auto}
</style>`;
