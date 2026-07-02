export const siteData = {
  websiteName: "鮫海博物館",
  romanizedName: "Sameumi Hakubutsukan",
  tagline: "海の捕食者を、正しく、深く、美しく知る。",
  description: "鮫海博物館は、サメの多様な種、生態、進化、行動、保全を学べる架空の海洋教育ミュージアムです。恐怖だけではない、海の捕食者の本当の姿を紹介します。",
  museumName: "鮫海博物館",
  address: "神奈川県横浜市中区海岸通4-18 鮫海ミュージアム",
  email: "hello@sameumi-museum.jp",
  businessHours: "10:00〜18:00 / 火曜休館",
  instagram: "https://instagram.com/sameumi.museum",
  disclaimer: "掲載している展示内容、開館時間、イベント情報、生物情報は架空または編集上の情報を含みます。実際の来館や学習利用の際は、各施設・公式情報をご確認ください。",

  navigation: [
    { label: "私たちについて", path: "/about" },
    { label: "サメ図鑑", path: "/species" },
    { label: "展示案内", path: "/exhibits" },
    { label: "保全と研究", path: "/conservation" },
    { label: "来館ガイド", path: "/visit" },
    { label: "お問い合わせ", path: "/contact" },
  ],

  footerLinks: [
    { label: "プライバシーポリシー", path: "/privacy" },
    { label: "利用規約", path: "/terms" },
  ],

  sharkSpecies: [
    {
      id: "great-white",
      japaneseName: "ホホジロザメ",
      commonType: "ネズミザメ目ネズミザメ科",
      sizeRange: "4.0m - 6.0m",
      habitat: "世界中の温帯から亜熱帯の海域",
      diet: "海生哺乳類、魚類、海鳥",
      behaviorNote: "好奇心が強く、獲物を探るために噛みつくことがある（テストバイト）。",
      dangerLevelNote: "人間にとって危険とされるが、意図的に人間を狙うことは稀。",
      conservationNote: "危急種（VU）。混獲やスポーツフィッシングにより個体数が減少。",
      description: "流線型の美しい体と強力な顎を持つ、海における頂点捕食者の一つ。その生態はまだ多くの謎に包まれています。",
      imageUrl: "/images/great-white.jpg"
    },
    {
      id: "whale-shark",
      japaneseName: "ジンベエザメ",
      commonType: "テンジクザメ目ジンベエザメ科",
      sizeRange: "5.5m - 12.0m",
      habitat: "世界中の熱帯・亜熱帯・温帯の海域",
      diet: "プランクトン、小魚",
      behaviorNote: "非常に温厚で、ゆっくりと泳ぎながら大量の海水を濾過してエサを食べる。",
      dangerLevelNote: "人間に対して全く危険はない。",
      conservationNote: "絶滅危惧種（EN）。船舶との衝突や漁業による影響が懸念されている。",
      description: "現存する世界最大の魚類。体に散りばめられた美しい白い斑点が夜空の星のように見えることから珍重されています。",
      imageUrl: "/images/whale-shark.jpg"
    },
    {
      id: "hammerhead",
      japaneseName: "シュモクザメ",
      commonType: "メジロザメ目シュモクザメ科",
      sizeRange: "1.0m - 6.0m",
      habitat: "熱帯から温帯の沿岸および外洋",
      diet: "魚類、イカ、甲殻類、エイ",
      behaviorNote: "特徴的な頭部（セファロフォイル）を使って海底の獲物を探し出す。",
      dangerLevelNote: "種類によっては危険だが、人への被害は少ない。",
      conservationNote: "多くの種が絶滅危惧（EN）や絶滅寸前（CR）に指定されている。",
      description: "T字型の頭部は、視界を広げ、獲物が発する微弱な電流を感知するロレンチーニ器官を広く配置するために進化したと考えられています。",
      imageUrl: "/images/hammerhead.jpg"
    },
    {
      id: "tiger-shark",
      japaneseName: "イタチザメ",
      commonType: "メジロザメ目メジロザメ科",
      sizeRange: "3.0m - 5.0m",
      habitat: "熱帯・亜熱帯の沿岸域",
      diet: "魚類、海亀、鳥類、甲殻類、海洋ゴミ",
      behaviorNote: "「海のゴミ箱」と呼ばれるほど何でも食べる雑食性。",
      dangerLevelNote: "ホホジロザメに次いで人への危険性が高いとされる。",
      conservationNote: "準絶滅危惧（NT）。",
      description: "若い個体の体側に見られるトラのような縞模様が名前の由来。非常に強靭な歯と顎を持ち、ウミガメの甲羅も噛み砕きます。",
      imageUrl: "/images/tiger-shark.jpg"
    },
    {
      id: "horn-shark",
      japaneseName: "ネコザメ",
      commonType: "ネコザメ目ネコザメ科",
      sizeRange: "0.8m - 1.2m",
      habitat: "日本近海などの浅い岩礁域",
      diet: "サザエ、ウニ、甲殻類",
      behaviorNote: "夜行性で、昼間は岩の隙間で休んでいることが多い。",
      dangerLevelNote: "人間に対して無害。",
      conservationNote: "低懸念（LC）。",
      description: "目の上の隆起が猫の耳のように見えることからその名が付きました。硬い殻を持つ獲物をすり潰すための臼歯のような歯を持っています。",
      imageUrl: "/images/horn-shark.jpg"
    },
    {
      id: "thresher-shark",
      japaneseName: "オナガザメ",
      commonType: "ネズミザメ目オナガザメ科",
      sizeRange: "3.0m - 6.0m",
      habitat: "世界中の温帯から熱帯の外洋",
      diet: "小魚の群れ、イカ",
      behaviorNote: "体長の半分を占める長い尾びれをムチのように使い、獲物を気絶させる。",
      dangerLevelNote: "人間には無害。",
      conservationNote: "危急種（VU）。",
      description: "大きな瞳と非常に長い尾が特徴的な美しいサメ。尾を振り下ろすスピードは時速80kmにも達すると言われています。",
      imageUrl: "/images/thresher-shark.jpg"
    },
    {
      id: "megamouth",
      japaneseName: "メガマウスザメ",
      commonType: "ネズミザメ目メガマウスザメ科",
      sizeRange: "4.0m - 5.5m",
      habitat: "世界中の深海（水深100m - 200m）",
      diet: "プランクトン（主にオキアミ）",
      behaviorNote: "夜間に浅い海域へ浮上し、日中は深海に潜る日周鉛直移動を行う。",
      dangerLevelNote: "人間に対して無害。",
      conservationNote: "情報不足（DD）または低懸念（LC）。目撃例が極端に少ない。",
      description: "巨大な口を持つ希少な深海ザメ。1976年に初めて発見されたばかりで、現在でも生態の多くが謎に包まれた「幻のサメ」です。",
      imageUrl: "/images/megamouth.jpg"
    },
    {
      id: "frilled-shark",
      japaneseName: "ラブカ",
      commonType: "カグラザメ目ラブカ科",
      sizeRange: "1.5m - 2.0m",
      habitat: "深海（水深500m - 1000m）",
      diet: "イカ、深海魚",
      behaviorNote: "ウナギのように体をくねらせて泳ぎ、獲物を丸飲みする。",
      dangerLevelNote: "人間には無害（深海に生息するため接触の機会がない）。",
      conservationNote: "低懸念（LC）。",
      description: "「生きた化石」と呼ばれる、原始的なサメの特徴を色濃く残す種。フリルのようなエラ裂と、三又に分かれた独特の歯が特徴です。",
      imageUrl: "/images/frilled-shark.jpg"
    },
    {
      id: "blue-shark",
      japaneseName: "ヨシキリザメ",
      commonType: "メジロザメ目メジロザメ科",
      sizeRange: "2.0m - 3.0m",
      habitat: "世界中の温帯・熱帯の外洋",
      diet: "イカ、小魚",
      behaviorNote: "非常に広範囲を回遊し、長距離を移動する。",
      dangerLevelNote: "状況によっては危険（漂流者への被害例がある）。",
      conservationNote: "準絶滅危惧（NT）。フカヒレの主要な原料として大量に捕獲されている。",
      description: "インディゴブルーの美しい背中とスレンダーな体が特徴。「世界で最も美しいサメ」と称されることもあります。",
      imageUrl: "/images/blue-shark.jpg"
    },
    {
      id: "tawny-nurse-shark",
      japaneseName: "オオテンジクザメ",
      commonType: "テンジクザメ目オオテンジクザメ科",
      sizeRange: "2.5m - 3.2m",
      habitat: "インド太平洋のサンゴ礁や浅い沿岸域",
      diet: "底生魚、タコ、イカ、甲殻類",
      behaviorNote: "昼間は海底の洞窟などで重なり合うようにして休み、夜に活動する。",
      dangerLevelNote: "基本的には無害だが、刺激すると噛みつくことがある。",
      conservationNote: "危急種（VU）。",
      description: "強力な吸引力で岩の隙間に隠れた獲物を吸い込むようにして捕食します。口元には感覚器官である「ヒゲ」があります。",
      imageUrl: "/images/tawny-nurse-shark.jpg"
    }
  ],

  exhibits: [
    {
      id: "evolution",
      title: "サメの進化",
      shortDescription: "4億年以上前から地球の海を泳ぎ続けるサメの進化の歴史を辿ります。",
      learningGoal: "サメが恐竜よりも長く生き延びてきた理由と、古代ザメ（メガロドンなど）から現代のサメへの適応の過程を学ぶ。",
      featuredSpecies: "ラブカ、ネコザメ",
      recommendedAudience: "全年齢"
    },
    {
      id: "senses",
      title: "海の捕食者の感覚",
      shortDescription: "サメが持つ驚異的な「第六感」であるロレンチーニ器官など、優れた感覚器官を体験します。",
      learningGoal: "視覚、嗅覚、聴覚に加え、微弱な電流を感知する特殊な感覚器官の仕組みを理解する。",
      featuredSpecies: "シュモクザメ、ヨシキリザメ",
      recommendedAudience: "小学生〜大人"
    },
    {
      id: "jaws",
      title: "歯とあごのしくみ",
      shortDescription: "何度でも生え替わるサメの歯のメカニズムと、種によって異なる歯の形状を観察します。",
      learningGoal: "食性（何を食べるか）によって歯の形がどのように進化してきたかを学ぶ。",
      featuredSpecies: "ホホジロザメ、イタチザメ",
      recommendedAudience: "全年齢"
    },
    {
      id: "deep-sea",
      title: "深海のサメ",
      shortDescription: "光の届かない過酷な環境で生き抜く深海ザメたちの奇妙で美しい姿を紹介します。",
      learningGoal: "深海という特殊な環境への適応と、発光するサメの生態について知る。",
      featuredSpecies: "メガマウスザメ、ラブカ",
      recommendedAudience: "小学生〜大人"
    },
    {
      id: "sizes",
      title: "巨大種と小型種",
      shortDescription: "手のひらサイズのサメから、バスほどの大きさになるサメまで、多様なスケールを体感します。",
      learningGoal: "サメという生物の多様性と、それぞれのサイズがもたらす生存戦略の違いを学ぶ。",
      featuredSpecies: "ジンベエザメ、ツラナガコビトザメ",
      recommendedAudience: "幼児〜大人"
    },
    {
      id: "myths",
      title: "サメと人間の誤解",
      shortDescription: "映画やメディアによって作られた「人食いザメ」というイメージと、実際の生態との違いを解き明かします。",
      learningGoal: "データに基づき、サメによる事故の実際の確率と、彼らが意図的に人間を狙うわけではないことを理解する。",
      featuredSpecies: "ホホジロザメ",
      recommendedAudience: "小学生〜大人"
    },
    {
      id: "conservation",
      title: "保全と未来",
      shortDescription: "現在、多くのサメが直面している絶滅の危機と、私たちにできることを考えます。",
      learningGoal: "フカヒレ漁や混獲の問題、そして生態系の頂点に立つサメが減ることで海全体に及ぶ影響を学ぶ。",
      featuredSpecies: "すべてのサメ",
      recommendedAudience: "中学生〜大人"
    }
  ],

  conservationContent: {
    role: "サメは海洋生態系の頂点捕食者（キーストーン種）として、病気や弱った獲物を捕食し、特定の種の異常発生を防ぐことで、サンゴ礁や海のバランスを健康に保つ重要な役割を担っています。",
    overfishing: "毎年約1億匹のサメが人間の活動によって命を落としていると推計されています。フカヒレを目的としたフィニング（ヒレだけを切り取り体を海に捨てる行為）や、他の魚を狙った網に偶然かかってしまう「混獲」が深刻な問題です。",
    fear: "映画などの影響により「サメ＝人食い」という恐怖のイメージが先行していますが、世界中で人間に危害を加える可能性があるサメは数百種のうちのごくわずかです。この誤解が、サメの保護活動への共感を妨げる要因にもなっています。",
    environment: "気候変動による海水温の上昇や海洋酸性化、プラスチックゴミによる海洋汚染も、サメの生息地と獲物に大きな影響を与えています。",
    education: "サメを恐れるのではなく「正しく知る」ことが保全の第一歩です。鮫海博物館では、生態系のリーダーとしてのサメの真の姿を伝え、次世代へ豊かな海を残すための教育活動に力を入れています。"
  },

  visitGuide: {
    hours: "10:00〜18:00 (最終入館 17:30)",
    closed: "毎週火曜日、年末年始",
    access: "みなとみらい線「馬車道駅」より徒歩5分\nJR「桜木町駅」より徒歩12分",
    floorGuide: "1F: エントランス、特別展示室、ミュージアムショップ\n2F: メインギャラリー（サメの進化、歯と顎）\n3F: 深海ゾーン、保全と研究室",
    recommendedRoute: "2Fの進化ゾーンから始まり、3Fの深海・保全エリアへと進むことで、サメの歴史から現在の課題までをストーリーとして体感できます。",
    family: "館内にはキッズスペースや、実際にサメの歯の化石に触れることができるハンズオン展示をご用意しています。ベビーカーの貸出も行っております。",
    accessibility: "全フロアにエレベーターと多目的トイレを設置しております。車椅子でのご見学もスムーズに行えます。",
    rules: "フラッシュ撮影はご遠慮ください（海洋生物のストレスとなります）。\n館内でのご飲食は所定のエリアでお願いいたします。\n展示物（とくに標本）にはお手を触れないようお願いいたします。"
  },

  faq: [
    {
      question: "本物のサメは泳いでいますか？",
      answer: "当館は生体展示（水族館）ではなく、標本、化石、最新のデジタル技術を用いた映像や骨格模型による「ミュージアム（博物館）」です。生きているサメの展示はございません。"
    },
    {
      question: "チケットの予約は必要ですか？",
      answer: "当館は架空の施設であるため、実際のチケット販売や予約は行っておりません。"
    },
    {
      question: "写真撮影は可能ですか？",
      answer: "フラッシュを使用しない写真撮影は原則として可能ですが、一部の特別展示において撮影をご遠慮いただく場合がございます。"
    },
    {
      question: "小さな子供でも楽しめますか？",
      answer: "はい、サメの大きさを体感できる実物大モデルや、触れる化石など、お子様も直感的に学べる展示を多くご用意しております。"
    }
  ],

  privacyPolicy: [
    {
      title: "個人情報の取得について",
      content: "当館（架空）は、お問い合わせフォーム等を通じて、氏名、メールアドレス等の個人情報を取得する場合があります。これらの情報は適法かつ公正な手段によって取得します。"
    },
    {
      title: "利用目的",
      content: "取得した個人情報は、お問い合わせへの回答、資料の送付、当館のサービス向上のための統計データ作成目的でのみ利用いたします。"
    },
    {
      title: "第三者提供について",
      content: "法令に基づく場合を除き、本人の同意を得ることなく、個人情報を第三者に提供することはありません。"
    },
    {
      title: "安全管理",
      content: "取得した個人情報は、漏えい、滅失、き損の防止のために適切な安全管理措置を講じます。"
    },
    {
      title: "免責事項",
      content: "本サイトは架空の博物館のウェブサイトです。実際に入力されたデータが実在の機関に送信されることはありません。"
    }
  ],

  terms: [
    {
      title: "サービスの利用条件",
      content: "本サイトは架空の博物館「鮫海博物館」のポートフォリオ用デモサイトです。どなたでも無料で閲覧いただけますが、記載されている施設情報やイベントは実在しません。"
    },
    {
      title: "掲載情報について",
      content: "サメの生態や生物学的な情報については、一般的な科学的知見に基づき作成しておりますが、その正確性や最新性を হারানোর完全保証するものではありません。"
    },
    {
      title: "免責事項",
      content: "本サイトの利用によって生じた、いかなるトラブルや損害についても、運営者は一切の責任を負いません。"
    },
    {
      title: "知的財産権",
      content: "本サイトを構成するテキスト、デザイン、ロゴ等に関する著作権は、当方に帰属します。無断での転載や再配布を禁じます。"
    }
  ]
};
