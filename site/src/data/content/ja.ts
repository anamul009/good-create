// 日本語コンテンツ。構造は ./en.ts と同一。
// 「CONFIRM」は資料と現行サイトで内容が異なる項目。
import type * as En from './en';
import type { Solution, NavItem } from './en';

export const company: typeof En.company = {
  name: '株式会社グッドクリエイト',
  nameJa: 'Good Create Co., Ltd.',
  short: 'グッドクリエイト',
  founded: '2000年（平成12年）3月1日',
  // CONFIRM: 現行サイト = 2億5817万5000円 / 3,627株、2026年資料 = 2億4355万円 / 3,588株
  capital: '2億5,817万5,000円',
  authorizedShares: '50,000株',
  issuedShares: '3,627株',
  officers: [
    { role: '代表取締役社長', name: '山本 真大' },
    // TODO: 取締役会長 兼 CTO の漢字表記を確認のうえ追加（英語版: Hiroshi Inage）
  ],
  philosophy: 'テクノロジーで人と社会をつなぎ、新しい価値と信頼のインフラを創造する。',
  vision: 'Web3.0時代の信頼インフラを提供し、誰もが安心してつながれる未来をつくる。',
  mission: '@POPを基盤としたセキュアな通信・本人認証・プラットフォームを開発し、世界へ展開する。',
  business: [
    'コンピューター用データベース並びにソフトウェアの開発と販売',
    'コンピューター及びオフィスオートメーション機器とそれらの関連機材、備品の販売',
    '人工知能を利用した情報処理サービス業務及び情報提供サービス業務',
    '人工知能を用いたシステムの開発及び販売',
    'IT機器の企画、製造、販売、輸出',
  ],
  advisors: [
    { role: '顧問弁護士', name: '弁護士法人プロテクトスタンス' },
    { role: '顧問税理士', name: '青木会計事務所' },
    { role: '顧問社労士', name: 'アイ社会保険労務士法人' },
    { role: '顧問弁理士', name: '創光国際特許事務所' },
  ],
  banks: ['百十四銀行 綾南支店', '三菱UFJ銀行 神保町支店', '愛媛銀行 丸亀支店', '三井住友銀行 京橋支店', '香川銀行 綾歌支店'],
  offices: [
    {
      label: '丸亀本店',
      city: '丸亀',
      lines: ['〒761-2402', '香川県丸亀市綾歌町岡田下346-3'],
      tel: '0877-57-1111',
      fax: '0877-57-1185',
    },
    {
      label: '東京本社',
      city: '東京',
      lines: ['〒140-0013', '東京都品川区南大井6丁目26-2', '大森ベルポートB館6階'],
    },
    {
      label: '@POP事業本部',
      city: '高松',
      lines: ['〒760-0019', '香川県高松市サンポート2-1', '高松シンボルタワー13階C'],
      tel: '087-802-6757',
      fax: '087-802-6758',
    },
  ],
};

export const patents: typeof En.patents = [
  { region: '日本', code: 'JP', number: '特許第7616571号' },
  { region: '米国', code: 'US', number: 'US 11836766 B2' },
  { region: '中国', code: 'CN', number: 'CN 107533520B' },
  { region: '韓国', code: 'KR', number: '제10-2634225호' },
  { region: '国際出願（PCT）', code: 'PCT', number: 'PCT/JP2020/035327' },
];

export const recognition: typeof En.recognition = [
  {
    year: '2025',
    title: '初代 国土強靱化大臣賞',
    body: '「第11回ジャパン・レジリエンス・アワード（強靭化大賞）2025」にて、Waravi と SecurityTalk が準グランプリおよび初代国土強靱化大臣賞を受賞。',
  },
  {
    year: '2025',
    title: 'ICT分野で世界初のハラール認証',
    body: 'SecurityTalk が、IT分野の製品として世界で初めて公式のハラール認証を取得。',
  },
  {
    year: '継続中',
    title: '防衛省での採用',
    body: '国家レベルの機密性と安全性が求められる特殊部隊にて採用されています。',
  },
  {
    year: '継続中',
    title: '海外政府機関での導入',
    body: '複数の国の政府機関・国防組織にて導入・運用されています。',
  },
];

export const solutions: Solution[] = [
  {
    slug: 'securitytalk',
    name: 'SecurityTalk',
    category: 'セキュア通信',
    tagline: '何も残さない、コミュニケーション。',
    summary:
      '組織のための閉域型の音声・ビデオ・チャット基盤。認証には @POP を用い、通話はP2Pで直接つながり、通信データはサーバーに一切保存されません。',
    external: { label: 'securitytalk.jp', href: 'https://securitytalk.jp/' },
    highlights: [
      { title: 'サーバーに残さない', body: '通信内容はサーバーに保存されません。通話やルームが終了すると、データは消去されます。' },
      { title: 'プライベートIDネットワーク', body: '契約ごとに固有のキーを発行。同じ契約内のユーザー同士だけがつながり、外部アプリや見知らぬ相手からは届きません。' },
      { title: '@POP 認証', body: '保持するのは復号できない暗号化IDのみ。万一盗まれても、なりすましには使えません。' },
      { title: 'P2P 暗号化通信', body: '端末同士が暗号化されたP2Pで直接接続。中継サーバーは安定化のためだけに使い、内容は保持しません。' },
      { title: '発着信ロック', body: '発信・着信には個人キーが必要。誤入力が続くとアプリをロックし、さらに続くとデータを消去します。' },
      { title: 'スクリーンショット対策', body: 'Android ではビデオ通話中のスクリーンショットを禁止。iOS では全参加者に即時通知します。' },
    ],
    steps: [
      { title: '認証', body: 'お客様の環境にも設置できる認証サーバーが、接続可能な通話番号を確認します。' },
      { title: '接続', body: '2台の端末の間に、暗号化されたP2P通信路を直接開きます。' },
      { title: '消去', body: 'セッション終了後、サーバーには何も残りません。履歴は端末の中だけにあります。' },
    ],
    facts: [
      { label: '対応環境', value: 'iOS · Android · Web' },
      { label: '機能', value: '1対1 音声・ビデオ通話 · チャット · SMS' },
      { label: 'ルーム', value: '3〜5名、役職順のレイアウト' },
      { label: '管理機能', value: '組織ID・部署管理・ユーザー単位の利用停止' },
      { label: '運用形態', value: '自社サーバー設置またはマネージド' },
      { label: '開発・運用', value: 'すべて日本国内' },
    ],
    useCases: ['官公庁・防衛', '経営層・役員間の連絡', '医療', '災害対応', '法務・金融'],
  },
  {
    slug: 'secure-device',
    name: 'セキュア端末 & Web3.0 OS',
    category: 'ハードウェア・OS',
    tagline: 'OSベンダーではなく、持ち主のための端末。',
    summary:
      '政府・重要機関向けの専用端末。AOSPをベースに機能を制限・堅牢化したOSに @POP を組み込み、汎用スマートフォンでは避けられないバックグラウンドでのデータ収集を排除します。',
    status: '日本・エジプト・フィリピン・サウジアラビアで導入予定',
    highlights: [
      { title: 'ゼロID通信', body: '永続的な識別子を持たず、会話ごとに個別の通信路を使用します。' },
      { title: 'メタデータの最小化', body: '「誰が・いつ・誰と」話したかの記録を残さない設計です。' },
      { title: 'カメラレス設計', body: 'カメラを物理的に搭載しないため、起動されることもありません。' },
      { title: '物理キルスイッチ', body: 'マイクとすべての無線機能をハードウェアで遮断できます。' },
      { title: '最小権限のOS', body: '不要な機能をOSレベルで削除し、任務に必要な機能だけを残します。' },
      { title: '端末内での保護', body: 'データは端末内にとどまり、@POP の同期技術で保護されます。' },
    ],
    facts: [
      { label: 'ベース', value: 'AOSP（制限ビルド）' },
      { label: '認証', value: '@POP（端末内）' },
      { label: '対象', value: '閣僚・政府機関・重要機関' },
    ],
  },
  {
    slug: 'waravi',
    name: 'Waravi',
    category: 'テレビ向けデジタルサービス',
    tagline: 'テレビのリモコンが、いちばん簡単なつながり方に。',
    summary:
      'ご家庭のスマートTVで、リモコンだけで使えるビデオ通話とデジタルサービス。高齢者、ご家族、介護施設、自治体のために。スマートフォンは必要ありません。',
    external: { label: 'Waravi チラシ（PDF）', href: '/docs/waravi-flyer.pdf' },
    highlights: [
      { title: 'リモコンだけで操作', body: '慣れ親しんだ自宅のテレビとリモコンで、子供や高齢者でも簡単にテレビ電話が使えます。' },
      { title: '電源オフでも着信', body: 'テレビの電源がオフでも着信を表示。「開く」を選べば通話が始まります。※機器の仕様・環境に依存します。' },
      { title: 'WARAVI Alert（オプション）', body: '登録地域の防災・緊急情報をテレビに通知し、読み上げにも対応。テレビを見ていなくても気づけます。' },
      { title: 'グループ通話・チャット', body: '1対1通話に加え、3者以上のテレビミーティング、チャット、PCとの画面共有に対応します。' },
      { title: '通話データを残さない', body: 'WebRTC による P2P 接続のため、通話データがサーバーに残らず、安心・安全です。' },
      { title: 'どの端末からでも', body: 'スマホ・PC・タブレット・テレビのどこからでもつながります。PCではバーチャル背景・ぼかしも利用可能。' },
    ],
    steps: [
      { title: 'Waravi を起動', body: 'テレビのメニューから WARAVI を起動します。' },
      { title: '番号を入力', body: '相手の番号を入力するか、短縮登録から選んで発信します。' },
      { title: '着信も簡単', body: 'テレビ視聴中に着信をポップアップ表示。「開く」を選べば通話開始です。' },
    ],
    facts: [
      { label: '対応機器', value: 'Android 内蔵テレビ · スマホ · タブレット · PC' },
      { label: '特許', value: '日本 · 中国 · 米国 · 韓国' },
      { label: '日本', value: '特許第6797791号' },
      { label: '米国', value: 'US 10,484,325 B2' },
      { label: '中国', value: 'ZL 2016 8 022915.X' },
      { label: '公式サイト', value: 'waravi.info' },
    ],
    useCases: ['ご家族の見守り', '3者以上のテレビミーティング', 'オンライン診療・健康相談', 'カスタマーサポート', '面接・応対', 'オンラインセミナー', '災害情報の通知', '介護施設'],
    note:
      'TVPAY — 決済とビデオ通話を内蔵したテレビリモコン。株式会社PAY ROUTEと共同で、Sony Acceleration Platform の支援を受けて開発。ID・パスワード不要のゼロ知識認証「RC-Auth」を採用しています。',
  },
  {
    slug: 'halal-sns',
    name: '公式ハラールSNS',
    category: 'ソーシャルプラットフォーム',
    tagline: 'プライバシーと信仰を大切にするSNS。',
    summary:
      'SecurityTalk の技術を基盤とした、イスラム圏のための安全で認証済みのソーシャルプラットフォーム。7か国のパートナーとともに2026年に公開し、スーパーアプリ、専用OS、専用端末へと発展させていきます。',
    status: '2026年 正式公開',
    highlights: [
      { title: 'ハラール認証済み', body: 'ICT分野で世界初の公式ハラール認証を取得した技術がベースです。' },
      { title: '設計によるプライバシー', body: 'SecurityTalk と @POP の技術で、個人データを中央サーバーに置きません。' },
      { title: '現地パートナーシップ', body: '宗教当局、政府、王族系企業との合弁事業で展開します。' },
    ],
    steps: [
      { title: 'アプリ公開', body: 'チャット・投稿・@POP 認証を備えた多言語SNS。' },
      { title: '基盤づくり', body: '各国合弁会社の設立、決済・広告事業。' },
      { title: 'スーパーアプリ', body: '送金・寄付・EC・オンデバイスAI。' },
      { title: 'ハラールOS', body: '@POP を組み込んだAOSPベースの専用OS。' },
      { title: 'ハードウェア', body: 'コミュニティのための専用スマートフォン。' },
    ],
    facts: [
      { label: '市場', value: '25億人' },
      { label: '目標', value: 'ユーザー10億人' },
      {
        label: 'MOU・合弁の対象国',
        value: 'インドネシア · バングラデシュ · パキスタン · UAE · サウジアラビア · ウズベキスタン · ポーランド',
      },
    ],
  },
  {
    slug: 'tsugite',
    name: 'TSUGITE',
    category: '実物資産のトラスト',
    tagline: '大切なモノのための、デジタルパスポート。',
    summary:
      '価値ある実物資産のライフサイクルを支える信頼基盤。まずはグレーディング済みトレーディングカードから。真贋認証・現物確認・保管・譲渡履歴を、ひとつの固有 Asset ID にひも付けます。',
    status: '開発中',
    highlights: [
      { title: '識別', body: 'グレーディングデータから固有の Asset ID を発行。' },
      { title: '検証', body: '誰が・いつ・どんな根拠で確認したかを記録。' },
      { title: '保護', body: '自宅か保管庫か、保管状況を記録。' },
      { title: '連携', body: '売買・譲渡・保険・相続につなげます。' },
    ],
  },
];

export const digitalServices: typeof En.digitalServices = [
  {
    name: '@CREATOR',
    body: '店舗アプリのビルドシステム。8種類のテンプレートから選び、写真やテキストを登録するだけで自社アプリが完成。予約・クーポン・スタンプ・EC・チャット・@POP 配信を標準搭載し、運用代行にも対応します。',
    href: '/solutions/atcreator/',
  },
  {
    name: 'ホームページ制作',
    body: 'セキュリティに配慮したコーポレートサイト・サービスサイトの企画・制作・保守。',
  },
  {
    name: 'WEBマーケティング',
    body: '検索・コンテンツ・キャンペーン施策で、ウェブサイトを事業の成果につなげます。',
  },
] as typeof En.digitalServices;

export const news: typeof En.news = [
  {
    slug: '2025-06-16-halal-certification',
    date: '2025-06-16',
    related: ['securitytalk', 'halal-sns'] as string[],
    tag: '認証取得',
    title: 'ICT分野における世界初のハラール認証を取得',
    body: 'SecurityTalk がイスラムの価値観に沿った情報保護技術として認められ、IT分野の製品として世界で初めてハラール認証を取得しました。',
  },
  {
    slug: '2025-04-25-japan-resilience-award',
    date: '2025-04-25',
    related: ['waravi', 'securitytalk'] as string[],
    tag: '受賞',
    title: '『第11回ジャパン・レジリエンス・アワード（強靭化大賞）2025』において準グランプリ・初代国土強靱化大臣賞を受賞しました',
    body: 'Waravi と SecurityTalk が、防災と強靭な社会インフラへの貢献を評価されました。',
  },
  {
    slug: '2023-12-18-capital-alliance',
    date: '2023-12-18',
    related: [] as string[],
    tag: 'コーポレート',
    title: '中西産業株式会社と資本業務提携を締結',
    body: '株式会社グッドクリエイトは、中西産業株式会社と資本業務提携を締結しました。',
  },
];

export const history: typeof En.history = [
  { year: '2000', month: '3月', title: '会社設立', body: '香川県丸亀市にて株式会社グッドクリエイトを設立。情報配信ツールや医療システムの開発を手がける。' },
  { year: '2020', month: '', title: '@POP 国際特許出願', body: '@POP のPCT出願（PCT/JP2020/035327）。のちに日本・米国・中国・韓国で特許を取得。' },
  { year: '2020', month: '', title: 'Waravi 誕生', body: 'コロナ禍の病院からの要望を受け、オンライン面会を容易にするテレビ電話技術を開発。' },
  { year: '2023', month: '12月', title: '資本業務提携', body: '中西産業株式会社と資本業務提携を締結。' },
  { year: '2025', month: '4月', title: '初代 国土強靱化大臣賞', body: '第11回ジャパン・レジリエンス・アワードにて、Waravi と SecurityTalk が準グランプリおよび初代国土強靱化大臣賞を受賞。' },
  { year: '2025', month: '6月', title: 'ICT分野で世界初のハラール認証', body: 'SecurityTalk が、IT分野の製品として初めて公式ハラール認証を取得。' },
  { year: '2026', month: '', title: '公式ハラールSNS 公開', body: '7か国のMOU・合弁パートナーとともに公式ハラールSNSを公開。' },
];

export const nav: NavItem[] = [
  {
    label: 'テクノロジー',
    href: '/technology/',
    intro: '@POP — 個人情報を端末に保持する、グッドクリエイトの特許技術。',
    children: [
      { label: '@POP とは', href: '/technology/', desc: 'Personal Own Protocol' },
      { label: '認証のしくみ', href: '/technology/#authentication', desc: '暗号化された再利用不能なID' },
      { label: '特許', href: '/technology/#patents', desc: '日本・米国・中国・韓国で取得' },
    ],
  },
  {
    label: 'ソリューション',
    href: '/solutions/',
    intro: '@POP を基盤とした製品群。政府のセキュリティから、ご家庭のリビングまで。',
    children: [
      { label: 'SecurityTalk', href: '/solutions/securitytalk/', desc: 'セキュア通信' },
      { label: 'セキュア端末 & Web3.0 OS', href: '/solutions/secure-device/', desc: 'ハードウェア・OS' },
      { label: 'Waravi', href: '/solutions/waravi/', desc: 'テレビ向けデジタルサービス' },
      { label: '公式ハラールSNS', href: '/solutions/halal-sns/', desc: 'ソーシャルプラットフォーム' },
      { label: 'TSUGITE', href: '/solutions/tsugite/', desc: '実物資産のトラスト' },
      { label: '@CREATOR', href: '/solutions/atcreator/', desc: '店舗アプリ ビルドシステム' },
      { label: 'デジタルサービス', href: '/solutions/#digital', desc: 'ホームページ制作 · WEBマーケティング' },
    ],
  },
  {
    label: '企業情報',
    href: '/company/',
    intro: '2000年に香川で創業。日本と世界のための信頼インフラを築いています。',
    children: [
      { label: '代表挨拶', href: '/company/#message' },
      { label: '企業理念', href: '/company/#philosophy' },
      { label: '会社概要', href: '/company/#profile' },
      { label: '沿革', href: '/company/#history' },
      { label: '拠点', href: '/company/#offices' },
    ],
  },
  { label: 'ニュース', href: '/news/' },
];
