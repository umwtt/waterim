import { useState } from "react";

const BASE_DURATION = 120; // her bir bölümün gösterim süresi (saniye)

export default function CreditsScroll({ onEnd }) {
    const [speed, setSpeed] = useState(1); // hız çarpanı
    const duration = BASE_DURATION / speed; // toplam süre

  const slower = () => setSpeed((s) => Math.max(0.5, s - 0.25));
  const faster = () => setSpeed((s) => Math.min(2, s + 0.25));  

  return (
    <>
    <div className="scroll"
        style={{ animationDuration: `${duration}s` }}
        onAnimationEnd={onEnd}
      >
      <section className="block">
        <h1>💧</h1>
        <p>
          bitanem benim seni çok özlüyorum bu son günlerde pek fazla konuşamıyoruz genel hayat koşuşturması arasında kayboluyoruz ve ne kadar seninle uzak kalsak veya çok fazla konuşmasak da farkındayım birsürü seyler düsünüyosun henüz bunların üzerine konuşmaya vakit bulamasak da en azından bu ön gösterim gibi olsun sonrasında hepsini beraber konuşalım güzelim :)
        </p>
      </section>

      <section>
        <small>Kalbim seni unutacak kadar adi ise, ellerim onu parçalayacak kadar asildir.</small>
      </section>

      <section className="block">
        <h1>☀</h1>
        <p>
          bazenleri kendini bağlanmamak için benden geri çektiğini biliyorum ve sebebini de çok iyi biliyorum ama sevgilim emin ol ne kadar kötü şeyler yaşadıysak ne kadar kötü insanlara maruz kaldıysak bile en sonunda her biri bizi bu güne getiren şeyler oldular ve ben bu süreçte çok fazla şey öğrendim ki en başında sensizliği öğrendim. sınav senemiz yaklaşıyor yine benzer dönemlerden geçicez ama fark şu ki çok fazla şey gördük öğrendik bu yüzden emin ol hiçbiri tekrar yaşanmayacak.
        </p>
      </section>

      <section>
        <small>365 gün, geceyim</small> <br />
        <small>Bi' gün öp dudaklarımı, de ki; "Günaydın"</small> <br />
        <small>Bana doğ, bana doğ, bir kere de bana doğ</small> <br />
        <small>Ya da yo, yalan ol, ilelebet haram ol, hayal ol</small>
      </section>

      <section className="block">
        <h1>ό</h1>
        <p>
          bazı anlar kötü hissediyosun ben istemeden yanında olamayabiliyorum bazen kafamı toplayamıyorum bazen anlamsız triplere giriyorum ama ne olursa olsun her zaman sonunda senle olmayı herşeyi beraber çözebilmeyi istiyorum ve sana verdiğim söz hala her zaman geçerli çünkü bize çok inanıyorum. yarın karşımıza ne çıkar yaşar mıyız asla belli değil ama sen her zaman benim en değerli varlıklarımdan birisin bambaşka bi yerdesin içimde umarım bunları sana gerçekten şüpheye bile yer bıraktırmayacak kadar hissettirebiliyorumdur
        </p>
      </section>

      <section className="block">
        <h1>Ω</h1>
        <p>
          dünyada senin gibi insanlar olması beni hep düşündürüyor çünkü yani sen herhangi birisi asla değilsin çok derinsin ve gerçekten hayatın içindesin özellikle benim hayatımın bu çok değerli benim için o aramızdaki bağ sürüp gittiği sürece her zaman mutluluğumuzda dargınlığımızda heyecanımızda veya çaresizliğimizde elimizi uzatabileceğimiz hep bizi güler yüzle karşılayan bir kapı gibi olmak ve o kadar farklı hayatlarımız olmasına rağmen beraber yürüyebilmek çok özel. bu yüzden sen su’sun. kalıplara sığmazsın yer gelir taşar yeri gelir bi yol bulur ama hep akarsın. umarım hayatta da hep böyle akmaya devam edersin sevgilim. asla birşeylere takılıp kalma çünkü su durmaz
        </p>
      </section>

      <section className="block">
        <h1>φ</h1>
        <p>
          bazenleri de öncesinde yaşadıklarını düşünüyorum ister istemez. hayatında onların tekrarlanmasından korkuyorsun ilişkinin sorumluluğundan çekiniyosun çok iyi anlıyorum ve çok haklısın. bu yüzden de biz sevgili olsak da olmasak da birbirimiz için bir yük veya sorumluluk değil huzur olmalıyız ve çok uzun zamandır bunu zaten yapıyoruz çık da güzel yapıyoruz iyi ki varsın iyi ki tanışmışız o gün ve iyi ki bitanemsin
        </p>
      </section>
      
      <section className="block">
        <h1>ϰ</h1>
        <p>
          birini gerçekten tanımak diye birşey yok bence çünkü herkes sürekli değişir gelişir büyür zamanda yoğrulur ama 4 ağustos 2023’te senden öğrendiğim en büyük şey birini gerçekten tanımak için onun özünü hissetmek gerektiği. birisi onu bildiği zaman sen nerede olursan ol ne kadar zaman geçerse geçsin senin içini görebiliyor. bende seni böyle biliyorum içini hissediyorum bu yüzden nasıl dönemlerden geçersen geç nasıl davranırsan davran sen hep watersın öyle kalıcaksın bu yüzden overthinklediğin şeyleri kendine dert etme güzelim. hayatın akışına bırak rahatla çünkü hiçbir şey kalıcı değil. 
        </p>
      </section>

        <section className="block">
        <h1>ɤ</h1>
        <p>
          ve dee neler olursa olsun her şeyin üzerine sonunda yine biziz ve iyi ki de biziz seni çok seviyorum her zaman hayatımda ol iyimde kötümde sen ol istiyorum çünkü benim mutluluğum benim dünyam sensin
        </p>
      </section>

      <section className="block">
        <h1>;</h1>
        <p>
          sevgililer günü değil evlilik yıldönümümüzü kutlayacağımız günlere gelsin.. seni çooook seviyorum 💗
        </p>
      </section>
    </div>

    <div className="speedControl">
        <button onClick={slower}>◀</button>
        <span>{speed.toFixed(2)}x</span>
        <button onClick={faster}>▶</button>
      </div>
    </>
  );
}
