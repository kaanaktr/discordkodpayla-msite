<style>
.avatar {
  border-radius: 5% !important;  
  border: 2px solid white;
  padding: 1px;
}
#avatar2 {
    width: 200px;
    height: 200px;
    transition: all .3s ease-in-out;
    cursor: pointer;
    text-align:center;
}
    #avatar2:hover {
        transform: translate(0px,-20px);
        -webkit-transform: translate(0px,-20px);
	}
  </style>

<title>Universal Code - TOPLULUK KODLAR</title>
<br><br>
  <h1 class="text-center text-light font-weight-bolder">
    Topluluk Kodlar
  </h1>
  <h5 class="text-center text-light font-weight-light">
    Eğer kodlarla alakalı daha çok bilgiye ulaşmak istiyorsanız <a href="/davet" target="_blank">Discord Sunucumuza</a> katılın!
  </h5>
<hr>

<div class="container">
  <input id="search" type="text" class="form-control" placeholder="Kod Ara" aria-label="Kod Ara" aria-describedby="basic-addon2">
</div><br>

<div style="margin-left: 0.1rem; margin-right: 0.1rem;" class="row row-cols-1 row-cols-md-4">

  {{#each kodlar}}
  <div class="col mb-1">
  <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <a class="btn btn-outline-warning nav-link text-uppercase" href="/topluluk/{{this.id}}"> <b>İNCELE</b></a>
  <div class="card-header"><center><img src="{{this.icon}}" alt="avatar" style="border-width: 1rem; border: solid;border-radius: 50%; max-width: 100%; height: 2.5rem;"></center> </br><b><center>{{this.k_adi}}</center></b></div>
  <div class="card-body">
    <p class="card-text avatar"><b>Kod Adı:</b> {{this.isim}}</p>
    <p class="card-text avatar"><b>Açıklama:</b> {{this.desc}}</p>
    <p class="card-text"><b>Paylaşılma Tarihi:</b> {{this.date}}</p>
    <p class="card-text"><b>Modüller:</b>{{#each this.modules}} <kbd>{{this}}</kbd> {{/each}}</p>
  </div>
    </div>
</div>
{{/each}}
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#search").keyup(function(){
    var value = $(this).val().toLowerCase();
    $(".card, .mb-3").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>