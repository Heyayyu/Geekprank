function evaluateStickiness(){$(_0x850e[1])[_0x850e[0]]()<$(_0x850e[2])[_0x850e[0]]()?$(_0x850e[1])[_0x850e[4]](_0x850e[3]):$(_0x850e[1])[_0x850e[5]](_0x850e[3])}function callPeriodically(){evaluateStickiness(),setTimeout(function(){callPeriodically()},300)}function startTime(){var e=new Date,x=e[_0x850e[6]](),_=e[_0x850e[7]]();_=checkTime(_),$(_0x850e[10])[_0x850e[9]](x+_0x850e[8]+_);setTimeout(startTime,1e3)}function checkTime(e){return e<10&&(e=_0x850e[11]+e),e}function playDemo(_0x3410xf){demoStep=_0x3410xf,1==runDemo&&(_0x3410xf<demo[_0x850e[38]]?($(_0x850e[40])[_0x850e[4]](_0x850e[39]),eval(demo[_0x3410xf]),setTimeout(function(){playDemo(_0x3410xf+1)},80*demoSpeed)):($(_0x850e[40])[_0x850e[5]](_0x850e[39]),$(_0x850e[42])[_0x850e[4]](_0x850e[41]),demoStep=0))}function pauseDemo(){$(_0x850e[40])[_0x850e[5]](_0x850e[39]),runDemo=0}function fillInput(e,x,_){e==_0x850e[43]&&$(_0x850e[45])[_0x850e[4]](_0x850e[44]),0==_&&$(e)[_0x850e[46]](_0x850e[24]),_<x[_0x850e[38]]&&setTimeout(function(){$(e)[_0x850e[46]]($(e)[_0x850e[46]]()+x[_0x850e[47]](_)),fillInput(e,x,_+1)},demoSpeed)}function updateTinderName(){$(_0x850e[51])[_0x850e[46]](_0x850e[48]+$(_0x850e[49])[_0x850e[9]]()+_0x850e[50]+getTodayDate())}function scrollBottom(){var e=document[_0x850e[53]](_0x850e[52]);e[_0x850e[54]]=e[_0x850e[55]]+200}function getTodayDate(){var e=new Date,x=String(e[_0x850e[57]]())[_0x850e[56]](2,_0x850e[11]),_=String(e[_0x850e[58]]()+1)[_0x850e[56]](2,_0x850e[11]),t=e[_0x850e[60]]().toString()[_0x850e[59]](2,4);return e=_+_0x850e[61]+x+_0x850e[61]+t}function setTimeInput(){var e=new Date,x=e[_0x850e[6]](),_=e[_0x850e[7]](),t=e[_0x850e[62]](),s=[_0x850e[63],_0x850e[64],_0x850e[65],_0x850e[66],_0x850e[67],_0x850e[68],_0x850e[69]];_=checkTime(_),$(_0x850e[71])[_0x850e[46]](s[t]+_0x850e[70]+x+_0x850e[8]+_)}function messageChanged(){$(_0x850e[73])[_0x850e[72]](100),$(_0x850e[45])[_0x850e[4]](_0x850e[44]),$(_0x850e[43])[_0x850e[46]]()[_0x850e[38]]<1&&$(_0x850e[45])[_0x850e[5]](_0x850e[44])}function dateChanged(){$(_0x850e[74])[_0x850e[4]](_0x850e[44]),$(_0x850e[71])[_0x850e[46]]()[_0x850e[38]]<1&&$(_0x850e[74])[_0x850e[5]](_0x850e[44])}function error(e){$(_0x850e[76])[_0x850e[75]](e),$(_0x850e[73])[_0x850e[77]](200)}function setMessageTemplate(){$(_0x850e[79])[_0x850e[78]](),$(_0x850e[84])[_0x850e[83]](function(){if($(this)[_0x850e[9]]()[_0x850e[80]](_0x850e[70])>=0){var e=$(this);e[_0x850e[75]](e[_0x850e[9]]()[_0x850e[82]](/(^\w+)/,_0x850e[81]))}});var e=_0x850e[85];$(_0x850e[90])[_0x850e[83]](function(){$(this)[_0x850e[5]](_0x850e[86]),$(this)[_0x850e[88]](_0x850e[87])&&e!=_0x850e[87]&&($(this)[_0x850e[4]](_0x850e[86]),e=_0x850e[87]),$(this)[_0x850e[88]](_0x850e[89])&&e!=_0x850e[89]&&($(this)[_0x850e[4]](_0x850e[86]),e=_0x850e[89])}),e=_0x850e[85],$($(_0x850e[90])[_0x850e[99]]()[_0x850e[98]]())[_0x850e[83]](function(){$(this)[_0x850e[5]](_0x850e[91]),$(this)[_0x850e[88]](_0x850e[87])&&e!=_0x850e[87]&&($(this)[_0x850e[4]](_0x850e[91]),e=_0x850e[87]),$(this)[_0x850e[88]](_0x850e[89])&&e!=_0x850e[89]&&($(this)[_0x850e[4]](_0x850e[91]),e=_0x850e[89]),$(this)[_0x850e[75]]()[_0x850e[80]](_0x850e[92])>0&&$(this)[_0x850e[4]](_0x850e[93]),$(this)[_0x850e[75]]()[_0x850e[80]](_0x850e[94])<1&&$(this)[_0x850e[4]](_0x850e[95]),$(this)[_0x850e[97]](_0x850e[96])}),$(_0x850e[104])[_0x850e[103]](function(){$(_0x850e[102])[_0x850e[46]](_0x850e[101])[_0x850e[100]]()}),$(_0x850e[106])[_0x850e[103]](function(){$(this)[_0x850e[105]]()[_0x850e[105]]()[_0x850e[78]](),setMessageTemplate()}),$(_0x850e[109])[_0x850e[103]](function(){$(this)[_0x850e[105]]()[_0x850e[105]]()[_0x850e[108]]()[_0x850e[107]]($(this)[_0x850e[105]]()[_0x850e[105]]()),setMessageTemplate()}),$(_0x850e[112])[_0x850e[103]](function(){$(this)[_0x850e[105]]()[_0x850e[105]]()[_0x850e[111]]()[_0x850e[110]]($(this)[_0x850e[105]]()[_0x850e[105]]()),setMessageTemplate()})}function parseMessageForLink(){$(_0x850e[43])[_0x850e[46]](function(e,x){var _=x[_0x850e[113]](/(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g);return $[_0x850e[83]](_,function(e,_){x=x[_0x850e[82]](_,_0x850e[114]+_+_0x850e[115]+_+_0x850e[116])}),x})}function sendMessage(e){$(_0x850e[40])[_0x850e[5]](_0x850e[41]),$(_0x850e[117])[_0x850e[72]](333);var x=_0x850e[24],_=_0x850e[24],t=_0x850e[118];t=e==_0x850e[87]?$(_0x850e[119])[_0x850e[46]]():$(_0x850e[49])[_0x850e[9]](),e==_0x850e[89]&&(x=_0x850e[120]+$(_0x850e[123])[_0x850e[122]](_0x850e[121])+_0x850e[124],$(_0x850e[127])[_0x850e[126]]({top:_0x850e[125]},80,function(){$(_0x850e[127])[_0x850e[126]]({top:_0x850e[11]},130,function(){})})),e==_0x850e[87]&&($(_0x850e[128])[_0x850e[126]]({top:_0x850e[125]},80,function(){$(_0x850e[128])[_0x850e[126]]({top:_0x850e[11]},130,function(){})}),_=_0x850e[120]+$(_0x850e[129])[_0x850e[122]](_0x850e[121])+_0x850e[124]),$(_0x850e[73])[_0x850e[72]](20),!$(_0x850e[74])[_0x850e[88]](_0x850e[44])&&!$(_0x850e[130])[_0x850e[88]](_0x850e[44])&&!$(_0x850e[131])[_0x850e[88]](_0x850e[44])&&$(_0x850e[43])[_0x850e[46]]()[_0x850e[38]]<1?(error(_0x850e[132]),$(_0x850e[43])[_0x850e[133]]()):(parseMessageForLink(),$(_0x850e[158])[_0x850e[126]]({left:-500,top:200,opacity:0},300,function(){var s=_0x850e[24];$(_0x850e[74])[_0x850e[88]](_0x850e[44])&&(s+=_0x850e[134]+$(_0x850e[71])[_0x850e[46]]()+_0x850e[135]);var a=_0x850e[24];if($(_0x850e[130])[_0x850e[88]](_0x850e[44])&&(a+=_0x850e[136]+$(_0x850e[137])[_0x850e[122]](_0x850e[121])+_0x850e[138]),$(_0x850e[45])[_0x850e[88]](_0x850e[44])&&$(_0x850e[43])[_0x850e[46]]()[_0x850e[38]]>0&&(a+=_0x850e[139]+$(_0x850e[43])[_0x850e[46]]()+_0x850e[140]),a[_0x850e[38]]>0&&(s+=_0x850e[141]+e+_0x850e[115]+x+_0x850e[142]+t+_0x850e[143]+a+_0x850e[144]+_+_0x850e[140]),$(_0x850e[131])[_0x850e[88]](_0x850e[44])){var n=_0x850e[11];activeEmoji=_0x850e[145],void 0==(n=$(_0x850e[147])[_0x850e[122]](_0x850e[146]))?Error(_0x850e[148]):s+=_0x850e[141]+e+_0x850e[115]+x+_0x850e[149]+n+_0x850e[150]+n+_0x850e[151]+_+_0x850e[140]}-1!=String(document[_0x850e[153]])[_0x850e[80]](_0x850e[152])&&$(_0x850e[2])[_0x850e[97]](s),setMessageTemplate(),evaluateStickiness(),scrollBottom(),$(_0x850e[155])[_0x850e[126]]({opacity:1},500,function(){$(_0x850e[155])[_0x850e[5]](_0x850e[154]),scrollBottom()}),$(_0x850e[158])[_0x850e[157]](_0x850e[156],0),$(_0x850e[158])[_0x850e[157]](_0x850e[159],0),$(_0x850e[160])[_0x850e[5]](_0x850e[44]),$(_0x850e[45])[_0x850e[4]](_0x850e[44]),$(_0x850e[137])[_0x850e[122]](_0x850e[121],_0x850e[161]),$(_0x850e[162])[_0x850e[46]](_0x850e[24]),$(_0x850e[163])[_0x850e[5]](_0x850e[100]),setTimeout(function(){$(_0x850e[158])[_0x850e[126]]({opacity:1},200,function(){$(_0x850e[43])[_0x850e[133]]()})},150)}))}function selectEmoji(e){$(_0x850e[164])[_0x850e[5]](_0x850e[100]),e!=activeEmoji?(activeEmoji=e,$(_0x850e[164])[_0x850e[83]](function(){$(this)[_0x850e[122]](_0x850e[146])==e&&($(_0x850e[131])[_0x850e[4]](_0x850e[44]),$(this)[_0x850e[126]]({top:_0x850e[165]},80,function(){$(this)[_0x850e[126]]({top:_0x850e[11]},130,function(){$(this)[_0x850e[166]](_0x850e[100])})}))})):(activeEmoji=_0x850e[145],$(_0x850e[131])[_0x850e[5]](_0x850e[44]))}function setMessageImage(){$(_0x850e[167])[_0x850e[46]]()[_0x850e[38]]>8?($(_0x850e[137])[_0x850e[122]](_0x850e[121],$(_0x850e[167])[_0x850e[46]]()),$(_0x850e[130])[_0x850e[4]](_0x850e[44])):$(_0x850e[167])[_0x850e[133]]()}function readMessageImageUrl(e){var x;if(e[_0x850e[168]]&&e[_0x850e[168]][0]){var _=new FileReader;_[_0x850e[169]]=function(e){x=e[_0x850e[171]][_0x850e[170]],$(_0x850e[137])[_0x850e[122]](_0x850e[121],x),$(_0x850e[130])[_0x850e[4]](_0x850e[44])},_[_0x850e[172]](e[_0x850e[168]][0])}}function readURL(e){var x;if(e[_0x850e[168]]&&e[_0x850e[168]][0]){var _=new FileReader;_[_0x850e[169]]=function(e){x=e[_0x850e[171]][_0x850e[170]],$(_0x850e[129])[_0x850e[122]](_0x850e[121],x)},_[_0x850e[172]](e[_0x850e[168]][0])}}function readHisURL(e){var x;if(e[_0x850e[168]]&&e[_0x850e[168]][0]){var _=new FileReader;_[_0x850e[169]]=function(e){x=e[_0x850e[171]][_0x850e[170]],$(_0x850e[173])[_0x850e[122]](_0x850e[121],x)},_[_0x850e[172]](e[_0x850e[168]][0])}}var _0x850e=["height","#messageArea","#messages","sidebarVisible","addClass","removeClass","getHours","getMinutes",":","text",".timeNow","0",'fillInput("#messageTextarea","Hey honey 😀",0);$("#rowDate").addClass("active");','sendMessage("me");','fillInput("#messageTextarea","Hey, what\'s up? ",0);','selectEmoji("hearts-eyes")','sendMessage("he");','fillInput("#messageTextarea","Check out this online",0);','fillInput("#messageTextarea","chat screenshot generator!",0);','fillInput("#messageTextarea","Wow pretty cool!",0);','fillInput("#messageTextarea","Can I send images?",0);','fillInput("#messageImageLink","/chat-screenshot/duh.jpg",0);',"setMessageImage();",'fillInput("#messageTextarea","Of course you can!",0);',"",'selectEmoji("like")','fillInput("#messageTextarea","Cool. What else?",0);','fillInput("#messageTextarea","Change the templates in the header ↑",0);','$("#wrapper").removeClass();$("#wrapper").addClass("a8");scrollBottom();','fillInput("#messageTextarea","This is LinkedIn",0);','fillInput("#messageTextarea","How do you like it?",0);','fillInput("#messageTextarea","Switch it back",0);','selectEmoji("poo")','fillInput("#messageTextarea","Alright",0);','$("#wrapper").removeClass();$("#wrapper").addClass("a6");','fillInput("#messageTextarea","Click the <strong>Erase All</strong> button",0);','fillInput("#messageTextarea","and compose your own conversation.",0);','fillInput("#messageTextarea","Scroll down if you need help.",0);',"length","demoRunning",".playDemo","blueBlinking",".eraseAllMessages","#messageTextarea","active","#rowMessage","val","charAt","You matched with ","#hisName"," on ","#tinderTop","messageArea","getElementById","scrollTop","scrollHeight","padStart","getDate","getMonth","slice","getFullYear","/","getDay","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"," ","#dateInput","hide","#error","#rowDate","html","#errorMessage","show","remove",".rowCommands","indexOf","<strong>$1</strong>","replace","each","#messages em","nobody","firstByThisGuy","me","hasClass","he","#messages .row","peckes","emojimg","emojiIncluded","messageText","noTextMessage",'<span class="rowCommands"><span class="rowDelete" title="Delete">&times;</span><span class="rowUp" title="Up">&laquo;</span><span class="rowDown" title="Down">&raquo;</span></span>',"append","reverse","get","select","suzan.jpg","#hisNameInput","click","#phoneHeaderImage","parent",".rowDelete","before","prev",".rowUp","after","next",".rowDown","match",'<a href="','">',"</a>","#welcome","#Me","#myNameHeaderInput",'<div class="mface"><img src="',"src","attr","#hisFaceAvatar",'" alt="face" /></div>',"+=10","animate","#sendAsFriend","#sendAsMe","#myFaceAvatar","#rowImage","#rowEmoji","Fill the message before sending it.","focus","<div class='row'><em class='date'>","</em></div>",'<img src="',"#messageImage",'" alt="message image" />',"<div class='messageText'>","</div>",'<div class="row ','<div class="message newMessage"><div contenteditable="true"><strong class="nameInMessage">',"</strong>","</div></div>","yo","data-emoji","#emojis span.select","No emoji selected.",'<div class="emoji newMessage"><img class="emojimg" src="smileys/','.png" alt="','"></div>',"eekpr","domain","newMessage",".newMessage","left","css","#prepareMessage","top","#prepareMessage > div.row","img-missing.png","#messageImageLink, #messageTextarea, #messageInput, #messageImageFileInput","#emojis span","#emojis > span","+=8","toggleClass","#messageImageLink","files","onload","result","target","readAsDataURL","#hisFaceAvatar, #phoneHeaderImage","#wrapfabtest",'<p>&nbsp;</p><p>&nbsp;</p><iframe src="https://disableadblock.com/widget/thief/?chat=screenshot" width="300" height="200" scrolling="no"></iframe>',"#sideReklm","innerWidth","#mainWrapper","d1","#screenOptions ul li","#d1","#friendChatId","#wrapper, #appOptions ul li","id","#wrapper","#appOptions ul li","#mainWrapper, #screenOptions ul li",".submit","fadeOut","innerHeight","offset","#screen","html, body","#sendMyMessageOnPhone","change","keyup",'<img src="smileys/','" />',"rowImage",".psName > span","#rowEmoji .psName > span","#myNameInput","#submitMyAvatarLink","#submitHisAvatarLink","#hisNameHeaderInput","keyup change","bind","#messageInput","#myNameFileInput","#hisNameFileInput","#sumbitMessageImageLink","#messageImageFileInput","ready"],demoSpeed=15,demo=[_0x850e[12],_0x850e[13],_0x850e[14],_0x850e[15],_0x850e[16],_0x850e[17],_0x850e[13],_0x850e[18],_0x850e[13],_0x850e[19],_0x850e[16],_0x850e[20],_0x850e[16],_0x850e[21],_0x850e[22],_0x850e[23],_0x850e[24],_0x850e[13],_0x850e[25],_0x850e[16],_0x850e[26],_0x850e[16],_0x850e[27],_0x850e[13],_0x850e[24],_0x850e[28],_0x850e[29],_0x850e[13],_0x850e[30],_0x850e[13],_0x850e[31],_0x850e[32],_0x850e[16],_0x850e[33],_0x850e[13],_0x850e[24],_0x850e[34],_0x850e[35],_0x850e[13],_0x850e[36],_0x850e[13],_0x850e[37],_0x850e[13]],demoStep=0,runDemo=0,activeEmoji=_0x850e[145];$(document)[_0x850e[213]](function(){setTimeout(function(){$(_0x850e[174])[_0x850e[0]]()>0||$(_0x850e[176])[_0x850e[75]](_0x850e[175])},1e4),window[_0x850e[177]]>1111&&($(_0x850e[178])[_0x850e[5]](),$(_0x850e[178])[_0x850e[4]](_0x850e[179]),$(_0x850e[180])[_0x850e[5]](),$(_0x850e[181])[_0x850e[4]](_0x850e[100])),window[_0x850e[177]]>1030&&$(_0x850e[43])[_0x850e[133]](),setMessageTemplate(),$(_0x850e[182])[_0x850e[103]](function(){$(this)[_0x850e[100]]()}),$(_0x850e[117])[_0x850e[103]](function(){$(this)[_0x850e[72]](333),$(_0x850e[40])[_0x850e[5]](_0x850e[41])}),$(_0x850e[186])[_0x850e[103]](function(){$(_0x850e[183])[_0x850e[5]](),$(_0x850e[185])[_0x850e[4]]($(this)[_0x850e[122]](_0x850e[184]))}),$(_0x850e[180])[_0x850e[103]](function(){$(_0x850e[187])[_0x850e[5]](),$(_0x850e[178])[_0x850e[4]]($(this)[_0x850e[122]](_0x850e[184]))}),$(_0x850e[188])[_0x850e[103]](function(){$(_0x850e[73])[_0x850e[72]](200)}),$(_0x850e[42])[_0x850e[103]](function(){$(_0x850e[42])[_0x850e[5]](_0x850e[41]),$(_0x850e[90])[_0x850e[189]](800,function(){$(_0x850e[2])[_0x850e[75]](_0x850e[24]),$(_0x850e[43])[_0x850e[133]]()})}),$(_0x850e[40])[_0x850e[103]](function(){$(_0x850e[117])[_0x850e[72]](222),$(_0x850e[40])[_0x850e[88]](_0x850e[39])?pauseDemo():(window[_0x850e[190]]<1020&&$(_0x850e[193])[_0x850e[126]]({scrollTop:$(_0x850e[192])[_0x850e[191]]()[_0x850e[159]]-10},200),runDemo=1,playDemo(demoStep))}),$(_0x850e[194])[_0x850e[103]](function(){sendMessage(_0x850e[87])}),$(_0x850e[128])[_0x850e[103]](function(){sendMessage(_0x850e[87])}),$(_0x850e[127])[_0x850e[103]](function(){sendMessage(_0x850e[89])}),$(_0x850e[71])[_0x850e[195]](function(){dateChanged()}),$(_0x850e[71])[_0x850e[196]](function(){dateChanged()}),$(_0x850e[43])[_0x850e[195]](function(){messageChanged()}),$(_0x850e[43])[_0x850e[196]](function(){messageChanged()}),$(_0x850e[164])[_0x850e[83]](function(){$(this)[_0x850e[75]](_0x850e[197]+$(this)[_0x850e[122]](_0x850e[146])+_0x850e[150]+$(this)[_0x850e[122]](_0x850e[146])+_0x850e[198])}),$(_0x850e[71])[_0x850e[103]](function(){$(_0x850e[74])[_0x850e[4]](_0x850e[44])}),$(_0x850e[200])[_0x850e[103]](function(){$(this)[_0x850e[105]]()[_0x850e[105]]()[_0x850e[122]](_0x850e[184])==_0x850e[199]&&($(_0x850e[137])[_0x850e[122]](_0x850e[121])==_0x850e[161]?($(this)[_0x850e[105]]()[_0x850e[105]]()[_0x850e[4]](_0x850e[44]),$(_0x850e[167])[_0x850e[133]]()):$(_0x850e[137])[_0x850e[122]](_0x850e[121],_0x850e[161])),$(this)[_0x850e[105]]()[_0x850e[105]]()[_0x850e[166]](_0x850e[44])}),$(_0x850e[201])[_0x850e[103]](function(){$(_0x850e[163])[_0x850e[5]](_0x850e[100])}),$(_0x850e[164])[_0x850e[103]](function(){selectEmoji($(this)[_0x850e[122]](_0x850e[146]))}),$(_0x850e[202])[_0x850e[103]](function(){$(this)[_0x850e[100]]()}),$(_0x850e[202])[_0x850e[195]](function(){$(_0x850e[129])[_0x850e[122]](_0x850e[121],$(_0x850e[202])[_0x850e[46]]())}),$(_0x850e[203])[_0x850e[103]](function(){$(_0x850e[129])[_0x850e[122]](_0x850e[121],$(_0x850e[202])[_0x850e[46]]())}),$(_0x850e[102])[_0x850e[103]](function(){$(this)[_0x850e[100]]()}),$(_0x850e[102])[_0x850e[195]](function(){$(_0x850e[173])[_0x850e[122]](_0x850e[121],$(_0x850e[102])[_0x850e[46]]())}),$(_0x850e[204])[_0x850e[103]](function(){$(_0x850e[173])[_0x850e[122]](_0x850e[121],$(_0x850e[102])[_0x850e[46]]())}),$(_0x850e[49])[_0x850e[103]](function(){$(_0x850e[205])[_0x850e[46]](_0x850e[24]),$(_0x850e[205])[_0x850e[133]](),$(_0x850e[49])[_0x850e[9]](_0x850e[24])}),$(_0x850e[205])[_0x850e[207]](_0x850e[206],function(e){$(_0x850e[49])[_0x850e[9]]($(_0x850e[205])[_0x850e[46]]()),updateTinderName()}),$(_0x850e[205])[_0x850e[103]](function(){$(this)[_0x850e[100]]()}),$(_0x850e[208])[_0x850e[207]](_0x850e[206],function(e){$(_0x850e[43])[_0x850e[46]]($(this)[_0x850e[46]]()),$(_0x850e[45])[_0x850e[4]](_0x850e[44])}),$(_0x850e[209])[_0x850e[195]](function(){readURL(this)}),$(_0x850e[210])[_0x850e[195]](function(){readHisURL(this)}),$(_0x850e[167])[_0x850e[103]](function(){$(this)[_0x850e[100]]()}),$(_0x850e[167])[_0x850e[195]](function(){$(_0x850e[137])[_0x850e[122]](_0x850e[121],$(_0x850e[167])[_0x850e[46]]()),$(_0x850e[130])[_0x850e[4]](_0x850e[44])}),$(_0x850e[211])[_0x850e[103]](function(){setMessageImage()}),$(_0x850e[212])[_0x850e[195]](function(){readMessageImageUrl(this)}),updateTinderName(),startTime(),setTimeInput(),callPeriodically()});