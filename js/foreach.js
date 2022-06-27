// ?  title.innerHTML+='<li>'+total+'</li>';




let data=[
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "新興區公所",
    "設置地址": "高雄市新興區中正三路34號1樓(室內停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "高雄市民權停車場(機車停車場)",
    "設置地址": "高雄市新興區民權一路221號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "為鑫機車行",
    "設置地址": "高雄市新興區民族二路126號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "億昌機車行",
    "設置地址": "高雄市新興區文昌里16鄰和平一路269號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "紫銧電動車(加盟店)",
    "設置地址": "高雄市新興區開封路124-1號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "高雄市立大同醫院",
    "設置地址": "高雄市前金區中華三路68號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "練習曲單車精品館(聯宏電動車)",
    "設置地址": "高雄市前金區成功一路311號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "阮綜合醫院",
    "設置地址": "高雄市苓雅區成功一路162號(SPA館機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "高雄市立凱旋醫院",
    "設置地址": "高雄市苓雅區凱旋二路130號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "特力屋大順店",
    "設置地址": "高雄市苓雅區武廟路218號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "紫銧電動車總店",
    "設置地址": "高雄市苓雅區武廟路131號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "家樂福購物中心-愛河店",
    "設置地址": "高雄市三民區河東路356號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "大樂股份有限公司",
    "設置地址": "高雄市三民區民族一路463號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "高雄高級中學",
    "設置地址": "高雄市三民區建國三路50號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "育英醫護管理專科學校",
    "設置地址": "高雄市三民區大昌二路420巷15號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "躍揚車業行",
    "設置地址": "高雄市三民區熱河二街20號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "勝翔電動車",
    "設置地址": "高雄市三民區民族一路35號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "湖立方大樓",
    "設置地址": "高雄市三民區文揚路95號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "百達翡翠大樓",
    "設置地址": "高雄市三民區建興路419巷1號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "百達翡翠大樓",
    "設置地址": "高雄市三民區建興路419巷15號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "百達翡翠大樓",
    "設置地址": "高雄市三民區建興路419巷21號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "當代五合院大樓",
    "設置地址": "高雄市三民區建元路9巷7號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "京城世界二期大廈",
    "設置地址": "高雄市三民區裕誠路62號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "弘揚大第",
    "設置地址": "高雄市三民區民族一路543巷25號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "私立高苑科技大學",
    "設置地址": "高雄市路竹區中山路1821號(圖資大樓旁機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "竹輪車業行",
    "設置地址": "高雄市路竹區中正路3號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "經濟部加工出口區管理處環保站",
    "設置地址": "高雄市楠梓區楠梓加工區經一路50號(東七街與經一路口)環境保護站清潔隊"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "國立高雄第一科技大學",
    "設置地址": "高雄市楠梓區卓越路2號(第四機車停車場D區)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "輕鬆騎電能車",
    "設置地址": "高雄市楠梓區軍校路751之5號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "翠屏里活動中心",
    "設置地址": "高雄市楠梓區德惠路55號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "仁昌里活動中心",
    "設置地址": "高雄市楠梓區壽豐路461號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "居悅大樓",
    "設置地址": "高雄市楠梓區藍昌路360巷56號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "佛羅里達大樓",
    "設置地址": "高雄市楠梓區德民路22號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "加昌一期大樓",
    "設置地址": "高雄市楠梓區秀群路521號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "交響苑大樓",
    "設置地址": "高雄市楠梓區楠裕街28號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "私立東方技術學院",
    "設置地址": "高雄市湖內區中山路一段301巷61號(數位教學大樓前機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "高雄市立空中大學",
    "設置地址": "高雄市小港區大業北路436號(校門外側圍牆)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "南區資源回收廠",
    "設置地址": "高雄市小港區北林路6號(游泳池旁停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "小港高級中學",
    "設置地址": "高雄市小港區學府路117號(地下停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "高雄市立小港醫院",
    "設置地址": "高雄市小港區山明路482號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "高鳳工家職業學校",
    "設置地址": "高雄市小港區松崗路119號(汽車科實習大樓)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "力王電動車業",
    "設置地址": "高雄市小港區沿海一路15號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "特力屋鳳山店",
    "設置地址": "高雄市鳳山區老爺里瑞隆東路99號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "鳳山高級商工職業學校",
    "設置地址": "高雄市鳳山區文衡路51號(圖書館旁機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "必翔電動車行",
    "設置地址": "高雄市鳳山區經武路63號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "老爺里活動中心",
    "設置地址": "高雄市鳳山區興隆街42號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "隆升機車行",
    "設置地址": "高雄市鳳山區文化西路162號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "青年市一期",
    "設置地址": "高雄市鳳山區文中街260巷1號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "緯城大三園大樓",
    "設置地址": "高雄市鳳山區杭州西街108號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "陽光西班牙大樓",
    "設置地址": "高雄市鳳山區和德街59號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "陽光西班牙大樓",
    "設置地址": "高雄市鳳山區和德街31號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "茄萣區公所",
    "設置地址": "高雄市茄萣區濱海路四段27號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "左營高中",
    "設置地址": "高雄市左營區 81344 海功路55號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "漢神巨蛋購物廣場",
    "設置地址": "高雄市左營區博愛二路777號(MB1E區機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "國軍左營醫院",
    "設置地址": "高雄市左營區軍校路553號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "京城之星大樓",
    "設置地址": "高雄市左營區明華一路283號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "京城之星大樓",
    "設置地址": "高雄市左營區明華一路275號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "喜悅大樓",
    "設置地址": "高雄市左營區文學路675號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "喜悅大樓",
    "設置地址": "高雄市左營區文學路681號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "文川大廈",
    "設置地址": "高雄市左營區文川路46號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "快樂弘揚大樓",
    "設置地址": "高雄市左營區重仁路251號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "本然大樓",
    "設置地址": "高雄市鼓山區南屏路561號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "私立樹德科技大學",
    "設置地址": "高雄市燕巢區橫山路59號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "私立義守大學(燕巢校區)",
    "設置地址": "高雄市燕巢區角宿里義大路8號 (地下一樓機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "私立和春技術學院",
    "設置地址": "高雄市大寮區琉球村農場路1-10號(守衛室旁)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "中山高級工商職業學校",
    "設置地址": "高雄市大寮區正氣路79號(大門右側一樓停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "旭冬車業",
    "設置地址": "高雄市大寮區鳳林三路205號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "好市多購物中心",
    "設置地址": "高雄市鼓山區大順一路111號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "國立中山大學",
    "設置地址": "高雄市鼓山區蓮海路70號(海科館停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "大榮高級中學",
    "設置地址": "高雄市鼓山區大榮街1號(警衛室後方機車停車棚)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "中山大學",
    "設置地址": "高雄市鼓山區蓮海路70號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "美河峰大樓",
    "設置地址": "高雄市鼓山區美術南二路12號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "橘園大樓",
    "設置地址": "高雄市鼓山區美術東八街101號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "米羅大廈",
    "設置地址": "高雄市鼓山區美術東八街82號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "米羅大廈",
    "設置地址": "高雄市鼓山區美術東八街100號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "皇苑人文首馥大樓",
    "設置地址": "高雄市鼓山區神農路199號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "采荷天大樓",
    "設置地址": "高雄市鼓山區文忠路57號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "仁武煙度檢測站",
    "設置地址": "高雄市仁武區仁安二巷102號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "力達車業-橋頭店",
    "設置地址": "高雄市橋頭區橋頭路5號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "私立正修科技大學",
    "設置地址": "高雄市鳥松區澄清路840號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "高雄市政府環保局澄清辦公室",
    "設置地址": "高雄市鳥松區澄清路834號(機車停車棚)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "仁美里活動中心",
    "設置地址": "高雄市鳥松區美山路228號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "鳥松區公所",
    "設置地址": "高雄市鳥松區中正路98號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "澄峰大廈",
    "設置地址": "高雄市鳥松區明湖路1號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "好市多購物中心-中華店",
    "設置地址": "高雄市前鎮區中華五路656號(機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "統一夢時代購物中心",
    "設置地址": "高雄市前鎮區中華五路789號(B1M C07區 機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "瑞祥高級中學",
    "設置地址": "高雄市前鎮區班超路63號(警衛室後方機車停車棚)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "躍揚車業行三多分店",
    "設置地址": "高雄市前鎮區三多二路367號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "駿揚電動車",
    "設置地址": "高雄市前鎮區武營路195號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "本欣電動車",
    "設置地址": "高雄市前鎮區崗山西街279號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "前鎮區公所",
    "設置地址": "高雄市前鎮區康定路151號2樓"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "美的皇家大樓",
    "設置地址": "高雄市前鎮區林森三路156號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "太普moma大樓",
    "設置地址": "高雄市前鎮區管仲南路362號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "勝翔車業",
    "設置地址": "高雄市岡山區岡山路192號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "義贊電動車",
    "設置地址": "高雄市岡山區岡山路208號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "私立義守大學(校本部)",
    "設置地址": "高雄市大樹區學城路一段1號(汽車停車場警衛室旁)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "耿昌機車行",
    "設置地址": "高雄市新興區青年一路458號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "亨旺機車行-(公共免費)",
    "設置地址": "高雄市三民區大豐二路362號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "富翔機車有限公司(原富鼎)",
    "設置地址": "高雄市前鎮區瑞祥街138號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "京城CBD大樓",
    "設置地址": "高雄市中華一路820號(地下停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "大東藝術中心",
    "設置地址": "高雄市鳳山區光遠路161號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "鎮北里活動中心",
    "設置地址": "高雄市鳳山區鎮北街102號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "緯城世界觀大樓",
    "設置地址": "高雄市鳳山區西湖街107號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "東方瑞士大樓",
    "設置地址": "高雄市三民區大豐一路111-3號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "岡山鐵馬",
    "設置地址": "高雄市岡山區平和路31號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "竺輪車業",
    "設置地址": "高雄市岡山區中山北路 98號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "三元機車行",
    "設置地址": "高雄市大寮區義和村鳳屏二路294號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "高雄師範大學",
    "設置地址": "高雄市苓雅區和平一路116號 (面對大門左手邊機車停車場)"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "信華車業行",
    "設置地址": "高雄市楠梓區益群路26號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "義興機車行",
    "設置地址": "高雄市三民區瀋陽街122號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "國順機車行",
    "設置地址": "高雄市三民區興隆街42-1號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "順士輪業有限公司",
    "設置地址": "高雄市新興區林森一路27號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "誠峰輪業有限公司",
    "設置地址": "高雄市新興區和平一路263號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "明光機車行",
    "設置地址": "高雄市鼓山區鼓山三路8-24號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "富貴祥發大樓",
    "設置地址": "高雄市鳳山區文衡路 269號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "南成機車行",
    "設置地址": "高雄市苓雅區福安路467號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "單車休息站",
    "設置地址": "高雄市鹽埕區七賢三路1號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "登山里里長服務處",
    "設置地址": "高雄市鼓山區鼓山一路87號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "永盛花園廣場大樓",
    "設置地址": "高雄市岡山區竹圍東街203-1號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "全陽機車行",
    "設置地址": "高雄市三民區明誠一路372號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "東晉機車行",
    "設置地址": "高雄市新興區民族二路64號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "先發機車行",
    "設置地址": "高雄市苓雅區英明路273號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "高雄師範大學",
    "設置地址": "高雄市苓雅區和平一路116號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "高雄師範大學",
    "設置地址": "高雄市苓雅區和平一路116號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "甲駿機車材料行",
    "設置地址": "高雄市前鎮區瑞和街220號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "上揚機車行",
    "設置地址": "高雄市楠梓區常德路273號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "竹輪車業",
    "設置地址": "高雄市楠梓區加昌路343號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "高雄師範大學",
    "設置地址": "高雄市燕巢區深中路62號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "高雄女子高級中學(不對外開放)",
    "設置地址": "高雄市前金區五福三路122號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "高雄女子高級中學(不對外開放)",
    "設置地址": "高雄市前金區五福三路122號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "高雄師範大學",
    "設置地址": "高雄市燕巢區深中路62號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "泛亞車業",
    "設置地址": "高雄市鼓山區華榮路585號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "湖山春曉社區",
    "設置地址": "高雄市鳳山區八德路二段147號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "新大機車行",
    "設置地址": "高雄市三民區鼎中路52號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "免費",
    "設置地點": "高雄第一科技大學",
    "設置地址": "高雄市楠梓區卓越路2號"
  },
  {
    "類別": "公共充電站",
    "計費方式": "投幣式",
    "設置地點": "皇苑逸品苑",
    "設置地址": "高雄市鼓山區美術北三路100號"
  }
];

let title =document.querySelector('.tilte');
let staionbtn =document.querySelector('.staion');
//綁定按鈕


  staionbtn.addEventListener("click",function(e){
    let total='';
      data.forEach(function(i){
        
        if(i.計費方式==e.target.value){
          total+='<li>'+(i.設置地址+'<p>'+i.計費方式)+'</li>';
        }
          else if(e.target.value=="全部"){
            total+='<li>'+(i.設置地址+'<p>'+i.計費方式)+'</li>';
          }
        title.innerHTML=total;
        
      })
  });
//按鈕事件


const stationname =document.querySelector(".staionname");
const stationchare =document.querySelector(".staioncharge");
const storebtn= document.querySelector(".storebtn");

// console.log(storebtn,stationchare,stationname);
storebtn.addEventListener("click",function(e){
 let obj={};
 obj.計費方式=stationchare.value;
 obj.設置地址=stationname.value;
//  console.log(obj);
data.push(obj);
  stationchare.value="";
  stationname.value="";

});











