function showPreview1(_0x4ac540){const _0x517627=Number(_0x4ac540['replace']('skill',''))-0x1,_0x179534=master[_0x517627],_0x3d2dd8=skillNames[_0x4ac540];if(!_0x179534)return void console['error']('Invalid\x20data\x20for\x20key:\x20'+_0x4ac540);let _0xf4fc01='<ol\x20class=\x22ul_list\x22><div\x20class=\x22left_li\x22>';for(let _0x50824b=0x1;_0x50824b<=0xa;_0x50824b++)_0xf4fc01+='<li>'+_0x50824b+':\x20<span\x20class=\x22red\x22>'+_0x179534[_0x50824b]+(_0x179534[_0x50824b]%0x1!=0x0?'%':'')+'</span></li>';if(_0xf4fc01+='</div>',_0x179534['length']>0xb){_0xf4fc01+='<div\x20class=\x22line1\x22>';for(let _0x1279fc=0xb;_0x1279fc<=0x14;_0x1279fc++)void 0x0!==_0x179534[_0x1279fc]&&(_0xf4fc01+='<li>'+_0x1279fc+':\x20<span\x20class=\x22red\x22>'+_0x179534[_0x1279fc]+(_0x179534[_0x1279fc]%0x1!=0x0?'%':'')+'</span></li>');_0xf4fc01+='</div>';}_0xf4fc01+='</div></ol>';const _0x7c1bf7=document['querySelector']('.popup'),_0x4b9a1f=document['querySelector']('.popup-content'),_0x19fd8d=document['querySelector']('.popup-overlay');_0x4b9a1f['innerHTML']='<h3>'+_0x3d2dd8+'</h3>'+_0xf4fc01,_0x7c1bf7['style']['display']='block',_0x19fd8d['style']['display']='block';}function calculate(){let _0x5e1124=0x0,_0x3546aa=0x0,_0x187ae6=0x0,_0x41a9a0=0x0,_0x266e12=0x0,_0xc96858=0x0,_0xd7dd88=0x0,_0x3f6cd9=0x0,_0x1ec23c=0x0,_0xc8c344=0x190,_0x8a62fb=0x0;$('.masterpoint')['each'](function(_0x3b0ca9){var _0x3a68a6=Number($(this)['val']());const _0x5003ef=master[_0x3b0ca9];$('.mtout')['eq'](_0x3b0ca9)['text'](_0x5003ef[_0x3a68a6]);var _0x598955=Number($('#def1')['text']()),_0x1d097e=Number($('#def2')['text']()),_0x222b4e=Number($('#def3')['text']()),_0x4442cb=Number($('#def4')['text']()),_0x4e3545=Number($('#def5')['text']());(_0x598955||_0x1d097e||_0x222b4e||_0x4442cb||_0x4e3545)&&(_0x5e1124=_0x598955+_0x1d097e+_0x222b4e+_0x4442cb+_0x4e3545);var _0x68d20d=Number($('#att1')['text']()),_0x45a33c=Number($('#att2')['text']()),_0x5a8010=Number($('#att3')['text']()),_0x224642=Number($('#att4')['text']()),_0x32d30e=Number($('#att5')['text']()),_0x13d531=Number($('#attper')['text']()),_0x10edab=0x0,_0x29c917=_0x68d20d+_0x45a33c+_0x5a8010+_0x32d30e,_0x48cd2d=_0x68d20d+_0x45a33c+_0x5a8010+_0x224642;_0x10edab=0x0==_0x13d531?0x1:_0x13d531,(_0x13d531||_0x68d20d||_0x45a33c||_0x5a8010||_0x224642||_0x32d30e)&&(_0x41a9a0=Math['floor'](_0x68d20d+_0x45a33c+_0x5a8010+_0x32d30e+_0x29c917*(_0x10edab/0x64)),_0x187ae6=Math['floor'](_0x68d20d+_0x45a33c+_0x5a8010+_0x224642+_0x48cd2d*(_0x10edab/0x64)));var _0x4f2b09=Number($('#stat1')['text']()),_0xacc14e=Number($('#stat2')['text']()),_0x509503=Number($('#stat3')['text']()),_0x31c798=Number($('#stat4')['text']());(_0x4f2b09||_0xacc14e||_0x509503||_0x31c798)&&(_0x266e12=_0x4f2b09+_0xacc14e+_0x509503+_0x31c798);var _0x57ec22=Number($('#boll1')['text']()),_0x5bce43=Number($('#boll2')['text']());(_0x57ec22||_0x5bce43)&&(_0xc96858=_0x57ec22+_0x5bce43);var _0x2ba319=Number($('#magA1')['text']()),_0x1cec33=Number($('#magA2')['text']());(_0x2ba319||_0x1cec33)&&(_0xd7dd88=_0x2ba319+_0x1cec33);var _0x4609ac=Number($('#hp1')['text']()),_0x2cc3c7=Number($('#hp2')['text']());(_0x4609ac||_0x2cc3c7)&&(_0x3546aa=_0x4609ac+_0x2cc3c7);var _0x3a310f=Number($('#cr1')['text']()),_0x4e3425=Number($('#cr2')['text']());(_0x3a310f||_0x4e3425)&&(_0x3f6cd9=(_0x3a310f+_0x4e3425)['toFixed'](0x2));var _0x265093=Number($('#db1')['text']()),_0x5a4d50=Number($('#db2')['text']());if(_0x265093['toFixed'](0x2),_0x5a4d50['toFixed'](0x2),(_0x265093||_0x5a4d50)&&(_0x1ec23c=(_0x265093+_0x5a4d50)['toFixed'](0x2)),_0xc8c344+=_0x3a68a6,_0x8a62fb+=_0x3a68a6,_0xc8c344>0x320)return alert('더이상\x20늘릴수\x20없습니다.'),_0xc8c344=0x320,void(_0x3a68a6=$(this)['val']());_0x8a62fb>0x190&&(_0x8a62fb=0x190);}),$('#attmin')['text'](_0x187ae6),$('#attmax')['text'](_0x41a9a0),$('#hp')['text'](_0x3546aa),$('#def')['text'](_0x5e1124),$('#stA')['text'](_0x266e12),$('#plB')['text'](_0xc96858),$('#mgA')['text'](_0xd7dd88),$('#mlv')['text'](_0xc8c344),$('#mpo')['text'](_0x8a62fb),$('#crisum')['text'](_0x3f6cd9),$('#dbsum')['text'](_0x1ec23c),$('.masterpoint')['prop']('readonly',!0x0);}function call(){}const master=[[0x0,18.06,30.27,41.64,52.19,61.97,70.99,79.29,86.9,93.85,100.17,105.89,111.3,115.64,119.73,123.34,126.5,129.24,131.59,133.58,135.24],[0x0,0x266,0x405,0x587,0x6ee,0x83a,0x96d,0xa87,0xb8a,0xc76,0xd4d,0xe10,0xebf,0xf5b,0xfe6,0x1061,0x10cd,0x112a,0x117a,0x11bd,0x11f6],[0x0,0x1ff,0x359,0x49b,0x5c6,0x6db,0x7db,0x8c6,0x9a0,0xa63,0xb16,0xbb8,0xc49,0xccc,0xd40,0xda6,0xe01,0xe4d,0xe90,0xec8,0xef7],[0x0,1.81,3.03,4.16,5.22,6.2,7.1,7.93,8.69,9.39,10.02,10.59,11.1,11.56,11.97,12.33,12.65,12.92,13.16,13.36,13.52],[0x0,12.04,20.18,27.76,34.8,41.31,47.33,52.86,57.94,62.57,66.78,70.59,74.02,77.09,79.82,82.23,84.34,86.16,87.73,89.05,90.16],[0x0,1.2,2.02,2.78,3.48,4.13,4.73,5.29,5.79,6.26,6.68,7.06,7.4,7.71,7.98,8.22,8.43,8.62,8.77,8.91,9.02],[0x0,1.2,2.02,2.78,3.48,4.13,4.73,5.29,5.79,6.26,6.68,7.06,7.4,7.71,7.98,8.22,8.43,8.62,8.77,8.91,9.02],[0x0,0x3c,0x64,0x8a,0xad,0xce,0xec,0x108,0x121,0x138,0x14d,0x160,0x172,0x181,0x18f,0x19b,0x1a5,0x1ae,0x1b6,0x1bd,0x1c2],[0x0,0x3,0x7,0xa,0xe,0x11,0x15,0x18,0x1c,0x1f,0x23],[0x0,1.2,2.02,2.78,3.48,4.13,4.73,5.29,5.79,6.26,6.68,7.06,7.4,7.71,7.98,8.22,8.43,8.62,8.77,8.91,9.02],[0x0,12.04,20.18,27.76,34.8,41.31,47.33,52.86,57.94,62.57,66.78,70.59,74.02,77.09,79.82,82.23,84.34,86.16,87.73,89.05,90.16],[0x0,1.2,2.02,2.78,3.48,4.13,4.73,5.29,5.79,6.26,6.68,7.06,7.4,7.71,7.98,8.22,8.43,8.62,8.77,8.91,9.02],[0x0,0xe,0x18,0x21,0x29,0x31,0x38,0x3f,0x45,0x4b,0x50,0x54,0x58,0x5c,0x5f,0x62,0x65,0x67,0x69,0x6a,0x6c],[0x0,0x6,0xb,0xf,0x13,0x17,0x1b,0x1e,0x21,0x24,0x27,0x29,0x2b,0x2d,0x2e,0x30,0x31,0x32,0x33,0x34,0x35],[0x0,1.02,1.27,1.52,1.75,1.97,2.18,2.38,2.57,2.75,2.92,3.08,3.24,3.38,3.52,3.65,3.77,3.88,3.99,4.09,4.18],[0x0,0xe,0x18,0x21,0x29,0x31,0x38,0x3f,0x45,0x4b,0x50,0x54,0x58,0x5c,0x5f,0x62,0x65,0x67,0x69,0x6a,0x6c],[0x0,0xe,0x18,0x21,0x29,0x31,0x38,0x3f,0x45,0x4b,0x50,0x54,0x58,0x5c,0x5f,0x62,0x65,0x67,0x69,0x6a,0x6c],[0x0,0xe,0x18,0x21,0x29,0x31,0x38,0x3f,0x45,0x4b,0x50,0x54,0x58,0x5c,0x5f,0x62,0x65,0x67,0x69,0x6a,0x6c],[0x0,0xe,0x18,0x21,0x29,0x31,0x38,0x3f,0x45,0x4b,0x50,0x54,0x58,0x5c,0x5f,0x62,0x65,0x67,0x69,0x6a,0x6c],[0x0,0xc,0x14,0x1b,0x22,0x29,0x2f,0x34,0x39,0x3e,0x42,0x46,0x4a,0x4d,0x4f,0x52,0x54,0x56,0x57,0x59,0x5a],[0x0,0x1,1.28,2.58,3.28,3.93,4.53,5.09,5.59,6.06,6.48,6.86,7.2,7.51,7.78,8.02,8.23,8.42,8.57,8.71,8.82],[0x0,0xc,0x14,0x1b,0x22,0x29,0x2f,0x34,0x39,0x3e,0x42,0x46,0x4a,0x4d,0x4f,0x52,0x54,0x56,0x57,0x59,0x5a],[0x0,0x21,0x38,0x4d,0x61,0x73,0x84,0x94,0xa2,0xaf,0xba,0xc5,0xcf,0xd7,0xdf,0xe6,0xec,0xf1,0xf5,0xf9,0xfc],[0x0,0x1,1.28,2.58,3.28,3.93,4.53,5.09,5.59,6.06,6.48,6.86,7.2,7.51,7.78,8.02,8.23,8.42,8.57,8.71,8.82],[0x0,0x1ff,0x359,0x49b,0x5c6,0x6db,0x7db,0x8c6,0x99e,0xa63,0xb16,0xbb8,0xc49,0xccc,0xd40,0xda6,0xe00,0xe4d,0xe90,0xec8,0xef7],[0x0,0x8,0xf,0x15,0x1b,0x20,0x25,0x29,0x2d,0x31,0x34,0x37,0x3a,0x3c,0x3f,0x40,0x42,0x44,0x45,0x46,0x47],[0x0,0x5,0x9,0xd,0x10,0x13,0x16,0x19,0x1b,0x1d,0x20,0x22,0x23,0x25,0x27,0x28,0x29,0x2a,0x2b,0x2c,0x2d],[0x0,0x5,0x9,0xd,0x10,0x13,0x16,0x19,0x1b,0x1d,0x20,0x22,0x23,0x25,0x27,0x28,0x29,0x2a,0x2b,0x2c,0x2d],[0x0,0x6,0xb,0xf,0x13,0x17,0x1b,0x1e,0x21,0x24,0x27,0x29,0x2b,0x2d,0x2e,0x30,0x31,0x32,0x33,0x34,0x35],[0x0,0xb,0x13,0x1b,0x22,0x28,0x2e,0x34,0x39,0x3e,0x42,0x46,0x49,0x4c,0x4f,0x51,0x53,0x55,0x57,0x58,0x59],[0x0,0x5,0x9,0xd,0x10,0x13,0x16,0x19,0x1b,0x1d,0x20,0x22,0x23,0x25,0x27,0x28,0x29,0x2a,0x2b,0x2c,0x2d],[0x0,0x5,0xa,0x10,0x17,0x1f,0x29,0x34,0x40,0x4d,0x5c,0x6c,0x7e,0x90,0xa4,0xb9,0xd0,0xe8,0x101,0x11b,0x137],[0x0,0xc,0x14,0x1b,0x22,0x29,0x2f,0x34,0x39,0x3e,0x42,0x46,0x4a,0x4d,0x4f,0x52,0x54,0x56,0x57,0x59,0x5a],[0x0,0x66,0xab,0xeb,0x127,0x15f,0x192,0x1c1,0x1ec,0x213,0x237,0x258,0x275,0x28f,0x2a6,0x2ba,0x2cc,0x2dc,0x2e9,0x2f4,0x2fe],[0x0,1.5,0x3,4.5,0x6,7.5,0x9,10.5,0xc,13.5,0xf],[0x0,0xe,0x18,0x21,0x29,0x31,0x38,0x3f,0x45,0x4b,0x50,0x54,0x58,0x5c,0x5f,0x62,0x65,0x67,0x69,0x6a,0x6c],[0x0,0x66,0xab,0xeb,0x127,0x15f,0x192,0x1c1,0x1ec,0x213,0x237,0x258,0x275,0x28f,0x2a6,0x2ba,0x2cc,0x2dc,0x2e9,0x2f4,0x2fe],[0x0,0x4b,0x96,0xe1,0x12c,0x177,0x1c2,0x20d,0x258,0x2a3,0x2ee,0x339,0x384,0x3cf,0x41a,0x465,0x4b0,0x4fb,0x546,0x591,0x5dc],[0x0,0x1b,0x2e,0x3f,0x50,0x5f,0x6c,0x79,0x85,0x8f,0x99,0xa2,0xaa,0xb1,0xb7,0xbd,0xc1,0xc6,0xc9,0xcc,0xcf],[0x0,0xbd,0x11d,0x177,0x1cc,0x21b,0x265,0x2aa,0x2ea,0x326,0x35e,0x391,0x3c0,0x3eb,0x412,0x436,0x457,0x474,0x48e,0x4a5,0x4b9],[0x0,0x6,0xb,0xf,0x13,0x17,0x1b,0x1e,0x21,0x24,0x27],[0x0,0x332,0x55c,0x75f,0x93e,0xaf9,0xc92,0xe0a,0xf63,0x109e,0x11bd,0x12c0,0x13a9,0x147a,0x1533,0x15d7,0x1666,0x16e3,0x174d,0x17a7,0x17f2],[0x0,0x26,0x1a,0x14,0x11,0xe,0xd,0xc,0xb,0xa,0x9],[0x0,0x12,0x19,0x21,0x2a,0x34,0x3e,0x48,0x54,0x5f,0x6b,0x78,0x84,0x91,0x9f,0xac,0xba,0xc8,0xd7,0xe6,0xf4],[0x0,0x8,0xe,0x14,0x1a,0x1f,0x24,0x28,0x2c,0x30,0x33,0x36,0x39,0x3c,0x3e,0x40,0x41,0x43,0x44,0x45,0x46],[0x0,1.81,3.03,4.16,5.22,6.2,7.1,7.93,8.69,9.39,10.02,10.59,11.1,11.56,11.97,12.33,12.65,12.92,13.16,13.36,13.52],[0x0,0xb,0x13,0x1b,0x22,0x28,0x2e,0x34,0x39,0x3e,0x42,0x46,0x49,0x4c,0x4f,0x51,0x53,0x55,0x57,0x58,0x59],[0x0,0xc,0x14,0x1b,0x22,0x29,0x2f,0x34,0x39,0x3e,0x42,0x46,0x4a,0x4d,0x4f,0x52,0x54,0x56,0x57,0x59,0x5a],[0x0,1.2,2.02,2.78,3.48,4.13,4.73,5.29,5.79,6.26,6.68,7.06,7.4,7.71,7.98,8.22,8.43,8.62,8.77,8.91,9.02],[0x0,7.22,12.11,16.66,20.88,24.79,28.4,31.72,34.76,37.54,40.07,42.35,44.41,46.25,47.89,49.34,50.6,51.7,52.64,53.43,54.1],[0x0,9.14,5.45,3.96,3.16,2.66,2.32,2.08,1.9,1.76,1.65,1.56,1.49,1.43,1.38,1.34,1.3,1.28,1.25,1.24,1.22],[0x0,43.19,25.77,18.73,14.94,12.59,10.99,9.84,8.98,8.31,7.79,7.37,7.02,6.75,6.51,6.32,6.17,6.04,5.93,5.84,5.77],[0x0,1.68,2.12,2.56,3.01,3.47,3.94,4.41,4.89,5.37,5.86],[0x0,0x5,0x9,0xd,0x10,0x13,0x16,0x19,0x1b,0x1d,0x20,0x22,0x23,0x25,0x27,0x28,0x29,0x2a,0x2b,0x2c,0x2d],[0x0,43.19,25.77,18.73,14.94,12.59,10.99,9.84,8.98,8.31,7.79,7.37,7.02,6.75,6.51,6.32,6.17,6.04,5.93,5.84,5.77],[0x0,0x32,0x64,0x96,0xc8,0xfa,0x12c,0x15e,0x190,0x1c2,0x1f4,0x226,0x258,0x28a,0x2bc,0x2ee,0x320,0x352,0x384,0x3b6,0x3e8],[0x0,0x6,0xb,0xf,0x13,0x17,0x1b,0x1e,0x21,0x24,0x27,0x29,0x2b,0x2d,0x2e,0x30,0x31,0x32,0x33,0x34,0x35],[0x0,1.02,1.27,1.52,1.75,1.97,2.18,2.38,2.57,2.75,2.92,3.08,3.24,3.38,3.52,3.65,3.77,3.88,3.99,4.09,4.18],[0x0,1.02,1.27,1.52,1.75,1.97,2.18,2.38,2.57,2.75,2.92,3.08,3.24,3.38,3.52,3.65,3.77,3.88,3.99,4.09,4.18],[0x0,1.02,1.27,1.52,1.75,1.97,2.18,2.38,2.57,2.75,2.92,3.08,3.24,3.38,3.52,3.65,3.77,3.88,3.99,4.09,4.18],[0x0,0x5,0x9,0xd,0x10,0x13,0x16,0x19,0x1b,0x1d,0x20,0x22,0x23,0x25,0x27,0x28,0x29,0x2a,0x2b,0x2c,0x2d],[0x0,1.02,1.27,1.52,1.75,1.97,2.18,2.38,2.57,2.75,2.92,3.08,3.24,3.38,3.52,3.65,3.77,3.88,3.99,4.09,4.18],[0x0,1.2,2.02,2.78,3.48,4.13,4.73,5.29,5.79,6.26,6.68,7.06,7.4,7.71,7.98,8.22,8.43,8.62,8.77,8.91,9.02],[0x0,1.02,1.27,1.52,1.75,1.97,2.18,2.38,2.57,2.75,2.92,3.08,3.24,3.38,3.52,3.65,3.77,3.88,3.99,4.09,4.18],[0x0,1.02,1.27,1.52,1.75,1.97,2.18,2.38,2.57,2.75,2.92,3.08,3.24,3.38,3.52,3.65,3.77,3.88,3.99,4.09,4.18],[0x0,0x6,0xb,0xf,0x13,0x17,0x1b,0x1e,0x21,0x24,0x27,0x29,0x2b,0x2d,0x2e,0x30,0x31,0x32,0x33,0x34,0x35],[0x0,1.02,1.27,1.52,1.75,1.97,2.18,2.38,2.57,2.75,2.92,3.08,3.24,3.38,3.52,3.65,3.77,3.88,3.99,4.09,4.18]],skillNames={'skill1':'내구\x20감소\x20(1)','skill2':'대인\x20방어율\x20증가','skill3':'최대\x20SD\x20증가','skill4':'자동\x20마나\x20회복력\x20증가','skill5':'내구\x20감소\x20(2)','skill6':'SD\x20회복\x20속도\x20상승','skill7':'자동\x20생명\x20회복력\x20증가','skill8':'방어력\x20증가','skill9':'속성\x20방어력\x20증가','skill10':'자동\x20AG\x20회복력\x20증가','skill11':'내구\x20감소\x20(3)','skill12':'방어\x20성공율\x20상승','skill13':'통솔\x20스텟\x20증가','skill14':'세트\x20방어력\x20증가','skill15':'복수','skill16':'에너지\x20스텟\x20증가','skill17':'체력\x20스텟\x20증가','skill18':'민첩\x20스텟\x20증가','skill19':'힘\x20스텟\x20증가','skill20':'제왕의\x20망토\x20방어\x20강화','skill21':'수호\x20방패','skill22':'제왕의\x20망토\x20공격\x20강화(최소\x20최대)','skill23':'강철\x20갑옷','skill24':'방패\x20막기','skill25':'공격\x20성공율\x20상승','skill26':'파이어\x20버스트\x20강화<br><span\x20class=\x27red\x27>10포인트\x20시\x20스피릿블래스트\x20스킬을\x20배울\x20수\x20있습니다.\x20</span>','skill27':'파이어스크림\x20강화<br><span\x20class=\x27red\x27>파이어스크림\x20스킬데미지\x20증가\x20합니다.\x20</span>','skill28':'카오틱디세이어\x20강화<br><span\x20class=\x27red\x27>10포인트\x20시\x20윈드소울\x20스킬을\x20배울\x20수\x20있습니다.\x20</span>','skill29':'일랙트릭\x20스파이크\x20강화','skill30':'파이어스크림\x20마스터리','skill31':'웨폰\x20마스터리','skill32':'스피릿\x20블래스트\x20강화<br><span\x20class=\x27red\x27>스피릿블래스트\x20스킬데미지\x20증가\x20합니다.\x20</span>','skill33':'호스\x20강화','skill34':'최대\x20생명력','skill35':'배틀글로리\x20강화\x20%<br><span\x20class=\x27red\x27>배틀글로리\x20스킬\x20사용\x20시\x20전투\x20위력이\x20증가\x20합니다.\x20<br>\x20배틀글로리\x20힘\x20200\x20/\x20통솔\x20200\x20</span>','skill36':'어스\x20쉐이크\x20강화','skill37':'\x20최대마나증가','skill38':'디바인아우라\x20강화<br><span\x20class=\x27red\x27>디바인아우라\x20사용\x20시\x20파티원\x20방어력이\x20증가\x20합니다.\x20<br>\x20디바인호스\x20착용해야\x20활성화\x20됩니다.\x20</span>','skill39':'최대\x20ag\x20강화','skill40':'최대\x20생명력\x20증폭','skill41':'크라운포스\x20강화<br><span\x20class=\x27red\x27>크라운포스\x20스킬의\x20스탯\x20증가\x20효과\x20증가\x20합니다.\x20<br>\x20크라운포스\x20에너지\x20300\x20/\x20통솔\x20400\x20\x20</span>','skill42':'대인\x20공격율','skill43':'통솔\x20공격력\x20강화<br><span\x20class=\x27red\x27>셉터착용\x20시\x20통솔\x20스텟이\x20수치[LV]\x20당\x20공격력이\x201씩증가\x20합니다.</span>','skill44':'셉터\x20강화<br><span\x20class=\x27red\x27>셉터착용\x20시\x20공격력이\x20증가\x20합니다..</span>','skill45':'방패\x20강화','skill46':'스피릿\x20크리티컬\x20확률\x20강화','skill47':'셉터\x20마스터리<br><span\x20class=\x27red\x27>셉터착용\x20시\x20대인전에\x20대한\x20공격력이\x20증가\x20합니다.\x20\x20</span>','skill48':'방패\x20마스터리','skill49':'스피릿\x20액설런트\x20확률\x20강화','skill50':'마나\x20감소','skill51':'몬스터\x20킬시\x20SD\x20회복','skill52':'몬스터\x20킬시\x20생명력\x20회복','skill53':'로드디그너티\x20강화<br><span\x20class=\x27red\x27>로드디그너티\x20스킬\x20시\x20크리티컬,\x20엑설런트\x20확률이\x20추가\x20증가\x20합니다.\x20<br>\x20로드디그너티\x20에너지\x20102\x20/\x20통솔\x20300\x20\x20</span>','skill54':'최소\x20공격력\x20상승','skill55':'몬스터\x20킬시\x20마나\x20회복','skill56':'디바인포스\x20강화<br><span\x20class=\x27red\x27>로드디그너티\x20스킬\x20시\x20크리티컬,\x20엑설런트\x20확률이\x20추가\x20증가\x20합니다.\x20<br>\x20디바인스피릿\x20착용해야\x20활성화\x20됩니다.</span>','skill57':'최대\x20공격력\x20증가','skill58':'크리티컬\x20데미지\x20확률\x20상승','skill59':'마나\x20완전\x20회복','skill60':'생명력\x20완전\x20회복','skill61':'생명력\x20흡수','skill62':'엑설런트\x20데미지\x20확률\x20상승','skill63':'스피릿\x20노블','skill64':'SD\x20완전\x20회복','skill65':'더블데미지\x20확률\x20상승','skill66':'SD\x20흡수','skill67':'적\x20방어력\x20무시\x20확률\x20상승'},popupOverlay=document['querySelector']('.popup-overlay'),popupClose=document['querySelector']('.popup-close');popupOverlay['addEventListener']('click',function(){document['querySelector']('.popup')['style']['display']='none',popupOverlay['style']['display']='none';}),popupClose['addEventListener']('click',function(){document['querySelector']('.popup')['style']['display']='none',popupOverlay['style']['display']='none';});const boxes=document['querySelectorAll']('.boxs\x20img');boxes['forEach'](_0x226519=>{_0x226519['addEventListener']('click',function(){const _0x7ac28c=this['id'];showPreview1(_0x7ac28c);});}),$(function(){$('.masterpoint')['spinner']({}),$('.masterpoint')['on']('spinstop',function(_0x42253e,_0x19a870){calculate();});});