/**
 * BKK BEYOND - Bi-weekly Content Archiving & Swapping Utility
 * Run with: node scripts/archive_utility.js
 */

const fs = require('fs');
const path = require('path');

// 경로 설정
const dbPath = path.join(__dirname, '../data/bkk_content.json');

// 1. 기존 데이터 읽기
if (!fs.existsSync(dbPath)) {
  console.error("❌ 에러: 데이터베이스 파일(data/bkk_content.json)을 찾을 수 없습니다.");
  process.exit(1);
}

const dbRaw = fs.readFileSync(dbPath, 'utf8');
const db = JSON.parse(dbRaw);

console.log("📂 기존 Curation Database를 로드했습니다.");
console.log(`- 현재 버전: ${db.current.version}`);
console.log(`- 백업된 아카이브 개수: ${db.archives.length}개\n`);

// 2. 현재 버전을 아카이브로 복사 & 추가
const oldCurrent = JSON.parse(JSON.stringify(db.current)); // Deep Copy

// 기존 아카이브에 동일 버전이 이미 존재한다면 예방 차원에서 필터링 제거
db.archives = db.archives.filter(item => item.version !== oldCurrent.version);

// 아카이브 배열 맨 앞에 기존 current 데이터 추가 (최신순 정렬 유지)
db.archives.unshift(oldCurrent);
console.log(`✨ 기존 버전 [${oldCurrent.version}]이 archives 배열에 안전하게 백업되었습니다.`);

// 3. 새로운 2주차 콘텐츠 정의 (이 자리에 2주마다 새 콘텐츠를 작성해 넣습니다)
const newVersion = "2026-06-15"; // 예시: 다음 2주 뒤 날짜
const newTheme = {
  ko: "6월 2주차: 숨겨진 차이나타운 심야 위스키 바와 에까마이 바이닐 투어",
  en: "June 2nd Week: Hidden Chinatown Late-night Whisky Bars & Ekkamai Vinyl Tour",
  th: "มิถุนายน สัปดาห์ที่ 2: บาร์วิสกี้ลับเยาวราชและทัวร์แผ่นเสียงเอกมัย"
};

// 새 라운드 번역 정보
const newTranslations = {
  ko: {
    "curation.songwatTagline": "Chinatown Secret Alley",
    "curation.songwatTitle": "소이 나나 뒷골목의 어두운 스피크이지",
    "curation.songwatDesc": "야오와랏 차이나타운의 번화가를 한 블록 벗어난 소이 나나(Soi Nana) 골목은, 낡은 중국 약재상 건물 뒤편으로 간판 없는 어두운 바들이 문을 열기 시작하는 방콕 밤문화의 숨은 중심지입니다.",
    "curation.songwatSpot1Title": "Asia Today",
    "curation.songwatSpot1Desc": "태국 전역에서 수집한 야생 꿀과 현지 허브로 독창적인 칵테일을 만드는 하이엔드 믹솔로지 바.",
    "curation.songwatSpot2Title": "Wallflowers Upstairs",
    "curation.songwatSpot2Desc": "꽃집 옥상을 아기자기하게 개조해 정원 속에서 라이브 재즈 음악을 듣는 옥상 루프탑 라운지.",
    "curation.songwatSpot3Title": "Pijiu Bar (피주 바)",
    "curation.songwatSpot3Desc": "홍콩 영화 세트장에 들어온 듯한 빈티지 조명 아래서 수입 수제 맥주를 맛보는 곳.",
    "curation.songwatMediaTag": "Soi Nana Speakeasy",
    "curation.songwatMediaCaption": "간판이 없는 어두운 문 뒤로 열리는 완전히 새로운 믹솔로지 세계",

    "curation.banTagline": "Ekkamai Vinyl Escape",
    "curation.banTitle": "에까마이 뒷골목의 스피커 명가와 로컬 라이브",
    "curation.banDesc": "현지 인디 음악가와 음악 감상가들이 밤마다 모여드는 에까마이는 방콕 젊은 층의 감성적인 소리 아지트입니다.",
    "curation.banSpot1Title": "Freaking Out The Neighborhood",
    "curation.banSpot1Desc": "턴테이블이 돌아가며 사이키델릭 록 음악을 뿜어내는 에까마이 빈티지 레코드 펍.",
    "curation.banSpot2Title": "Alonetogether Bangkok",
    "curation.banSpot2Desc": "은은한 촛불 조명 아래 정통 클래식 재즈 밴드 라이브 공연을 가까이서 감상하는 바.",
    "curation.banSpot3Title": "Studio Lam (스튜디오 람)",
    "curation.banSpot3Desc": "태국 전통 음악인 몰람(Mo Lam)을 힙한 테크노 사운드와 혼합하여 연주하는 댄스 LP 바.",
    "curation.banMediaTag": "Vinyl & Sounds",
    "curation.banMediaCaption": "스피커 너머로 뿜어져 나오는 현지 아날로그 사운드의 감동",

    "curation.talatTagline": "Heritage & Canals",
    "curation.talatTitle": "운하 옆 오래된 불상 공방 골목",
    "curation.talatDesc": "방콕의 전통적인 수상 가옥과 고풍스러운 수공예 골목들은 수십 년 전 태국의 아름다움을 그대로 간직하고 있습니다.",
    "curation.talatSpot1Title": "Baan Bat (반밧)",
    "curation.talatSpot1Desc": "태국 전통 불교 승려들의 구걸용 철제 바리바리를 아직도 손으로 두드려 수작업 생산하는 유일한 역사 마을.",
    "curation.talatSpot2Title": "Klong Bang Luang Artist Village",
    "curation.talatSpot2Desc": "조용한 목조 운하 길을 따라 걸으며 지역 목각 인형극을 무료 관람할 수 있는 예술인 마을.",
    "curation.talatSpot3Title": "Chata Specialty Coffee",
    "curation.talatSpot3Desc": "오래된 벽돌 벽담 정원 틈새에 유리온실 형태로 숨겨진 고급 스페셜티 카페.",
    "curation.talatMediaTag": "Monk Bowl Craft",
    "curation.talatMediaCaption": "전통 망치 소리가 잔잔하게 울려 퍼지는 헤리티지 운하 마을"
  },
  en: {
    "curation.songwatTagline": "Chinatown Secret Alley",
    "curation.songwatTitle": "Dim Speakeasies in Soi Nana Back Alleys",
    "curation.songwatDesc": "Just one block away from the busy Yaowarat street, Soi Nana Chinatown is the hidden center of Bangkok nocturnal scene where vintage Chinese herbal shops transform into signless cocktail chambers.",
    "curation.songwatSpot1Title": "Asia Today",
    "curation.songwatSpot1Desc": "An intimate mixology bar showcasing wild honey and native botanicals from all over Thailand.",
    "curation.songwatSpot2Title": "Wallflowers Upstairs",
    "curation.songwatSpot2Desc": "A dreamy garden-like rooftop lounge hidden above a local florist shop featuring live acoustic jazz.",
    "curation.songwatSpot3Title": "Pijiu Bar",
    "curation.songwatSpot3Desc": "Enjoy premium craft beers under warm retro lighting resembling an old Hong Kong film set.",
    "curation.songwatMediaTag": "Soi Nana Speakeasy",
    "curation.songwatMediaCaption": "A completely new mixology world opening behind signless doors",

    "curation.banTagline": "Ekkamai Vinyl Escape",
    "curation.banTitle": "Vinyl Havens & Indie Acoustic Acts in Ekkamai",
    "curation.banDesc": "Ekkamai is a trendy sound hideout for local audiophiles and independent musicians who seek high-fidelity speakers and deep cuts.",
    "curation.banSpot1Title": "Freaking Out The Neighborhood",
    "curation.banSpot1Desc": "A retro vintage records pub spinning psychedelic rock, lofi hip-hop, and local draft drinks.",
    "curation.banSpot2Title": "Alonetogether Bangkok",
    "curation.banSpot2Desc": "A candlelit speakeasy displaying top-tier acoustic live jazz bands almost every night.",
    "curation.banSpot3Title": "Studio Lam",
    "curation.banSpot3Desc": "A legendary dance venue fusing traditional Thai Mo Lam folk with modern electronic grooves.",
    "curation.banMediaTag": "Vinyl & Sounds",
    "curation.banMediaCaption": "Analog waves radiating from vintage wooden tube speakers",

    "curation.talatTagline": "Heritage & Canals",
    "curation.talatTitle": "Monk Alms Bowl Alleys & Scenic Wooden Canals",
    "curation.talatDesc": "Bangkok's old canal neighborhoods retain beautiful wooden shophouses, vintage monk alms craft shops, and peaceful heritage vibes.",
    "curation.talatSpot1Title": "Baan Bat",
    "curation.talatSpot1Desc": "The last remaining community hand-hammering steel alms bowls for Buddhist monks since the Ayutthaya period.",
    "curation.talatSpot2Title": "Klong Bang Luang Artist Village",
    "curation.talatSpot2Desc": "Walk along scenic canals, paint masks, and watch traditional puppet theatre in a quiet artist enclave.",
    "curation.talatSpot3Title": "Chata Specialty Coffee",
    "curation.talatSpot3Desc": "A gorgeous glasshouse cafe hidden under old brick temple walls serving premium drips."
  },
  th: {
    "curation.songwatTagline": "Chinatown Secret Alley",
    "curation.songwatTitle": "บาร์ลับในตรอกซอกซอยซอยนานา เยาวราช",
    "curation.songwatDesc": "เพียงหนึ่งบล็อกจากถนนเยาวราชที่คึกคัก ซอยนานาคือศูนย์กลางยามค่ำคืนที่ซ่อนอยู่ ซึ่งร้านขายยาจีนโบราณจะกลายร่างเป็นบาร์ค็อกเทลไร้ป้ายไฟ",
    "curation.songwatSpot1Title": "Asia Today",
    "curation.songwatSpot1Desc": "บาร์มิกโซโลจีขนาดกะทัดรัดที่นำเสนอน้ำผึ้งป่าและสมุนไพรท้องถิ่นจากทั่วประเทศไทย",
    "curation.songwatSpot2Title": "Wallflowers Upstairs",
    "curation.songwatSpot2Desc": "รูฟท็อปเลานจ์บรรยากาศสวนสวยในฝันที่ซ่อนตัวอยู่เหนือร้านดอกไม้ท้องถิ่น",
    "curation.songwatSpot3Title": "Pijiu Bar",
    "curation.songwatSpot3Desc": "เพลิดเพลินกับคราฟต์เบียร์ระดับพรีเมียมภายใต้แสงไฟเรโทรที่อบอุ่นคล้ายกับฉากหนังฮ่องกงเก่า",

    "curation.banTagline": "Ekkamai Vinyl Escape",
    "curation.banTitle": "สวรรค์แห่งแผ่นเสียงและดนตรีอินดี้ในเอกมัย",
    "curation.banDesc": "เอกมัยคือแหล่งกบดานทางเสียงของนักฟังเพลงและนักดนตรีอิสระที่แสวงหาเครื่องเสียงระดับไฮไฟและเพลงนอกกระแส",
    "curation.banSpot1Title": "Freaking Out The Neighborhood",
    "curation.banSpot1Desc": "ผับเรโทรแผ่นเสียงวินเทจเปิดแนวไซเคเดลิกร็อก โลไฟฮิปฮอป และเครื่องดื่มคราฟต์",
    "curation.banSpot2Title": "Alonetogether Bangkok",
    "curation.banSpot2Desc": "บาร์ลับใต้แสงเทียนจัดแสดงวงดนตรีแจ๊สสดฝีมือเยี่ยมเกือบทุกค่ำคืน",
    "curation.banSpot3Title": "Studio Lam",
    "curation.banSpot3Desc": "สถานที่เต้นรำระดับตำนานที่ผสมผสานเพลงหมอลำแบบไทยดั้งเดิมเข้ากับจังหวะอิเล็กทรอนิกส์สมัยใหม่",

    "curation.talatTagline": "Monk Bowl Craft",
    "curation.talatTitle": "ตรอกตีบาปและบ้านไม้ริมคลองประวัติศาสตร์",
    "curation.talatDesc": "ย่านริมคลองเก่าแก่ของกรุงเทพฯ ยังคงอนุรักษ์ตึกแถวไม้เก่า ตรอกทำบาตรพระโบราณ และบรรยากาศริมน้ำที่เงียบสงบ"
  }
};

// 4. db.current 오브젝트 갱신
db.current = {
  version: newVersion,
  theme: newTheme,
  translations: newTranslations
};

console.log(`🆕 새로운 버전 [${newVersion}] 콘텐츠로 current 노드가 업데이트되었습니다.`);

// 5. 파일에 다시 쓰기
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log("💾 data/bkk_content.json 파일이 성공적으로 기록 및 업데이트 완료되었습니다! (SUCCESS)");
