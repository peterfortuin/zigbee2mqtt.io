"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55044],{791328:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-0962d890","path":"/devices/NAS-AB02B0.html","title":"Neo NAS-AB02B0 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Neo NAS-AB02B0 control via MQTT","description":"Integrate your Neo NAS-AB02B0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-08-11T22:17:44.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Humidity alarm (binary)","slug":"humidity-alarm-binary","link":"#humidity-alarm-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Temperature alarm (binary)","slug":"temperature-alarm-binary","link":"#temperature-alarm-binary","children":[]},{"level":3,"title":"Alarm (binary)","slug":"alarm-binary","link":"#alarm-binary","children":[]},{"level":3,"title":"Melody (enum)","slug":"melody-enum","link":"#melody-enum","children":[]},{"level":3,"title":"Duration (numeric)","slug":"duration-numeric","link":"#duration-numeric","children":[]},{"level":3,"title":"Temperature min (numeric)","slug":"temperature-min-numeric","link":"#temperature-min-numeric","children":[]},{"level":3,"title":"Temperature max (numeric)","slug":"temperature-max-numeric","link":"#temperature-max-numeric","children":[]},{"level":3,"title":"Humidity min (numeric)","slug":"humidity-min-numeric","link":"#humidity-min-numeric","children":[]},{"level":3,"title":"Humidity max (numeric)","slug":"humidity-max-numeric","link":"#humidity-max-numeric","children":[]},{"level":3,"title":"Volume (enum)","slug":"volume-enum","link":"#volume-enum","children":[]},{"level":3,"title":"Power type (enum)","slug":"power-type-enum","link":"#power-type-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1710443552000},"filePathRelative":"devices/NAS-AB02B0.md"}')},395548:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var o=i(166252);const a=(0,o._)("h1",{id:"neo-nas-ab02b0",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#neo-nas-ab02b0","aria-hidden":"true"},"#"),(0,o.Uk)(" Neo NAS-AB02B0")],-1),d=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"NAS-AB02B0")],-1),u=(0,o._)("td",null,"Vendor",-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Temperature & humidity sensor and alarm")],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"temperature, humidity, humidity_alarm, battery_low, temperature_alarm, alarm, melody, duration, temperature_min, temperature_max, humidity_min, humidity_max, volume, power_type, linkquality")],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/NAS-AB02B0.png",alt:"Neo NAS-AB02B0"})])],-1),s=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),m=(0,o.uE)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="humidity-alarm-binary" tabindex="-1"><a class="header-anchor" href="#humidity-alarm-binary" aria-hidden="true">#</a> Humidity alarm (binary)</h3><p>Value can be found in the published state on the <code>humidity_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> humidity alarm is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="temperature-alarm-binary" tabindex="-1"><a class="header-anchor" href="#temperature-alarm-binary" aria-hidden="true">#</a> Temperature alarm (binary)</h3><p>Value can be found in the published state on the <code>temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> temperature alarm is ON, if <code>false</code> OFF.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary" aria-hidden="true">#</a> Alarm (binary)</h3><p>Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm is ON, if <code>false</code> OFF.</p><h3 id="melody-enum" tabindex="-1"><a class="header-anchor" href="#melody-enum" aria-hidden="true">#</a> Melody (enum)</h3><p>Value can be found in the published state on the <code>melody</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;melody&quot;: NEW_VALUE}</code>. The possible values are: <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>, <code>8</code>, <code>9</code>, <code>10</code>, <code>11</code>, <code>12</code>, <code>13</code>, <code>14</code>, <code>15</code>, <code>16</code>, <code>17</code>, <code>18</code>.</p><h3 id="duration-numeric" tabindex="-1"><a class="header-anchor" href="#duration-numeric" aria-hidden="true">#</a> Duration (numeric)</h3><p>Value can be found in the published state on the <code>duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1800</code>. The unit of this value is <code>s</code>.</p><h3 id="temperature-min-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-min-numeric" aria-hidden="true">#</a> Temperature min (numeric)</h3><p>Value can be found in the published state on the <code>temperature_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_min&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>80</code>. The unit of this value is <code>°C</code>.</p><h3 id="temperature-max-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-max-numeric" aria-hidden="true">#</a> Temperature max (numeric)</h3><p>Value can be found in the published state on the <code>temperature_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_max&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>80</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-min-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-min-numeric" aria-hidden="true">#</a> Humidity min (numeric)</h3><p>Value can be found in the published state on the <code>humidity_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_min&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="humidity-max-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-max-numeric" aria-hidden="true">#</a> Humidity max (numeric)</h3><p>Value can be found in the published state on the <code>humidity_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_max&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="volume-enum" tabindex="-1"><a class="header-anchor" href="#volume-enum" aria-hidden="true">#</a> Volume (enum)</h3><p>Value can be found in the published state on the <code>volume</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;volume&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="power-type-enum" tabindex="-1"><a class="header-anchor" href="#power-type-enum" aria-hidden="true">#</a> Power type (enum)</h3><p>Value can be found in the published state on the <code>power_type</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>battery_full</code>, <code>battery_high</code>, <code>battery_medium</code>, <code>battery_low</code>, <code>usb</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',32),h={},p=(0,i(983744).Z)(h,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[d,(0,o._)("tbody",null,[r,(0,o._)("tr",null,[u,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Neo"},{default:(0,o.w5)((()=>[(0,o.Uk)("Neo")])),_:1})])]),c,l,n])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),s,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),m])}]])}}]);