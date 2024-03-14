"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[21338],{132972:(e,o,t)=>{t.r(o),t.d(o,{data:()=>i});const i=JSON.parse('{"key":"v-d1c5b512","path":"/devices/ZYA-C4-MOD-S.html","title":"Yale ZYA-C4-MOD-S control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Yale ZYA-C4-MOD-S control via MQTT","description":"Integrate your Yale ZYA-C4-MOD-S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-09-17T10:00:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Removing","slug":"removing","link":"#removing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Lock","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Auto lock time (enum)","slug":"auto-lock-time-enum","link":"#auto-lock-time-enum","children":[]},{"level":3,"title":"Volume (enum)","slug":"volume-enum","link":"#volume-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1710443552000},"filePathRelative":"devices/ZYA-C4-MOD-S.md"}')},859273:(e,o,t)=>{t.r(o),t.d(o,{default:()=>m});var i=t(166252);const a=(0,i._)("h1",{id:"yale-zya-c4-mod-s",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#yale-zya-c4-mod-s","aria-hidden":"true"},"#"),(0,i.Uk)(" Yale ZYA-C4-MOD-S")],-1),l=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZYA-C4-MOD-S")],-1),c=(0,i._)("td",null,"Vendor",-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Control4 module for Yale KeyFree/Keyless/Doorman/Assure/nexTouch locks")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"lock (state, lock_state), action, battery, battery_low, auto_lock_time, volume, linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZYA-C4-MOD-S.png",alt:"Yale ZYA-C4-MOD-S"})])],-1),r=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair the device; permit joining in Zigbee2MQTT, ensure that the ZYA-C4-MOD-S is inserted into the lock, click the button next to the module 3 times (a chime should sound), wait and another chime should sound on success. If the pariring fails, the lock will beep 3 times and flash a red light - if this happens, repeat the process again.</p><h3 id="removing" tabindex="-1"><a class="header-anchor" href="#removing" aria-hidden="true">#</a> Removing</h3><p>To remove the device, please do not use the delete device facility in Zigbee2MQTT - this will likely fail. Instead, click the button next to the module 3 times a chime should sound, followed shortly by another. You should then see in Zigbee2MQTT that the device has successfully left the network and should be available for re-pairing.</p>',5),h=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action on the lock. Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>unknown</code>, <code>lock</code>, <code>unlock</code>, <code>lock_failure_invalid_pin_or_id</code>, <code>lock_failure_invalid_schedule</code>, <code>unlock_failure_invalid_pin_or_id</code>, <code>unlock_failure_invalid_schedule</code>, <code>one_touch_lock</code>, <code>key_lock</code>, <code>key_unlock</code>, <code>auto_lock</code>, <code>schedule_lock</code>, <code>schedule_unlock</code>, <code>manual_lock</code>, <code>manual_unlock</code>, <code>non_access_user_operational_event</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="auto-lock-time-enum" tabindex="-1"><a class="header-anchor" href="#auto-lock-time-enum" aria-hidden="true">#</a> Auto lock time (enum)</h3><p>Value can be found in the published state on the <code>auto_lock_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;auto_lock_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_lock_time&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>30seconds</code>, <code>60seconds</code>, <code>2minutes</code>, <code>3minutes</code>.</p><h3 id="volume-enum" tabindex="-1"><a class="header-anchor" href="#volume-enum" aria-hidden="true">#</a> Volume (enum)</h3><p>Value can be found in the published state on the <code>volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;volume&quot;: NEW_VALUE}</code>. The possible values are: <code>silent</code>, <code>low</code>, <code>high</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),p={},m=(0,t(983744).Z)(p,[["render",function(e,o){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[l,(0,i._)("tbody",null,[d,(0,i._)("tr",null,[c,(0,i._)("td",null,[(0,i.Wm)(t,{to:"/supported-devices/#v=Yale"},{default:(0,i.w5)((()=>[(0,i.Uk)("Yale")])),_:1})])]),n,s,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),r,(0,i.kq)(" Notes END: Do not edit below this line "),h])}]])}}]);