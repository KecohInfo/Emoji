!function(){function f(){var a=document.createElement("div");a.id="kecohblock";
a.innerHTML='<div class="inner">
<div class="header">
<h2>Ad Blocker Detected</h2>
</div> <div class="isi">
<p>Please consider supporting us by disabling your ad blocker</p>
<div class="tombol">
<button class="1 active">Adblock</button>
<button class="2">Adblock Plus</button>
</div>
<div class="caranya">
<div class="1 active">
<ol>
<li>Click on the AdBlock icon in your browser<br>
<img src="https://goo.gl/DxMpmF" alt="Adblock"></li>
<li>Choose, Don\'t run on pages on this domain<br>
<img src="https://goo.gl/AWtmjA" alt="Adblock" width="auto"></li>
<li>A new window will appear. Click on the "Exclude" button<br>
<img src="https://goo.gl/2Myn2z" alt="Adblock"></li>
<li>The browser icon should have turned grey<br>
<img src="https://goo.gl/dJG6jH" alt="Adblock"></li>
<li>Refresh the page if it didn\'t refresh automatically. Thanks!</li>
</ol>
</div>
<div class="2">
<ol>
<li>Click on the AdBlock Plus icon in your browser<br>
<img src="https://goo.gl/ciwpWh" alt="Adblock"></li>
<li>Click on "Enabled on this site" position<br>
<img src="https://goo.gl/Z2ASxZ" alt="Adblock" width="auto"></li>
<li>Once clicked, it should change to "Disabled on this site"<br>
<img src="https://goo.gl/w6CWAw" alt="Adblock" width="auto"></li>
<li>The browser icon should have turned grey<br>
<img src="https://goo.gl/P6geir" alt="Adblock"></li>
<li>Refresh the page if it didn\'t refresh automatically. Thanks!</li>
</ol>
</div>
</div>
</div>
</div>';
document.body.append(a);document.body.style.overflow="hidden";var b=a.querySelectorAll("button");a.querySelector(".close");var d=a.querySelectorAll(".caranya > div");for(a=0;a<b.length;a++)b[a].addEventListener("click",function(a){a.preventDefault();a=this.getAttribute("class").split(" ")[0];for(var c=0;c<d.length;c++)d[c].classList.remove("active"),b[c].classList.remove("active");b[a-1].classList.add("active");d[a-1].classList.add("active")})}var b=document.createElement("script");b.type="text/javascript";
b.async=!0;b.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";b.onerror=function(){f();window.adblock=!0};var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(b,e)}();
