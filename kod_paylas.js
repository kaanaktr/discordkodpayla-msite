<title>Universal Code - KOD PAYLAŞIMI</title>
<main>
  <div class="container">
    <h1 class="text-center">
      Kod Paylaşım
    </h1>
    <p class ="text-center">
      Eğer troll amaçlı veya kod dışında bir şey paylaşılırsa sunucuda "Paylaşım Yapamaz" rolü alırsınız.
    </p>
    <hr>
    <div class="bg-dark">
      <form action="paylasim" method="POST">
    <div class="input-group">
      <input type="text" class="form-control" name="kod_adi" placeholder="Kodun Adı" required>
      <div class="input-group-append">
        <select class="custom-select text-white bg-dark" name="kod_rank" id="rank_choice" required>
          <option value="normal">Normal</option>
          <option value="altin">Altın</option>
          <option value="elmas">Elmas</option>
          <option value="hazir">Hazır Sistem</option>
          <option value="topluluk">Sizden Gelenler</option>
        </select>
      </div>
    </div><br>
      <input type="text" class="form-control" name="desc" placeholder="Kodun Açıklaması" required><br>
      <input type="text" class="form-control" name="modules" placeholder="Gerekli Modüller (',' ile ayırın)" required><br>
      <input type="text" class="form-control" name="author" placeholder="Kodu Yazan Kişiler (',' ile ayırın)" required><br>
      <p class="h3">
        Kodun Main Dosyası Buraya:
      </p>
      <textarea class="form-control" name="main_code" id="main_code" rows="20" placeholder="Kodunuzun Main Dosyasını Buraya Girin" required></textarea>
      <p class="h3">
        Komutlar Klasörüne Atılacak Dosya Buraya:
      </p>
      <textarea class="form-control" name="komutlar_code" id="komutlar_code" rows="20" placeholder="Komutlar Klasörüne Atılacak Dosya Buraya" required></textarea><br>
      <input type="text" class="form-control" name="k_adi" value="{{user.username}}" required READONLY hidden><br>
      <button type="submit" class="btn btn-outline-primary btn-lg">Gönder</button>
    </form>
    </div>
  </div>
</main>