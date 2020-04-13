1. 웹페이지 첫번째 장 :

   - 첫번째 span 은 커튼 애니메이션을 주기 위한 span

   - 첫번째, 두번째 div 그룹은 페이지 첫번째를 꾸미기 위한 div

   ``` html
   <div class="container">
       <p>FAST CAMPUS</p>
       <p id="boldtext">PROJECT</p>
   </div>
   ```

   ``` html
    <div class="details">
    	<div class="imgBx">
    		<img src="../img/SVG/html-5.svg" 	alt="html5 icon">
   		<p>HTML</p>
   	</div>
   </div>
   ```

   -> img 태그를 써서 플랫아이콘에서 svg 파일과, p 태그 사용

<hr>

1. 헤더 

   - ``` html
     <h1 class="logo">
     	<a href="https://www.ediya.com/" title="이디야카페 공식 홈페이지">
     	<span style="--i:1;">E</span>
     	</a>
     </h1>
     ```

   -> 첫번째 제목을 로고로 정함.

   - <p style="color:red">네비게이션 을 열기 위한 button 태그</p>

   ``` html
   <button type="button" title="메뉴열기" class="open-btn" aria-labelledby="nav" onclick="toggle()">
   열기
   </button>
   <nav class="navigation">
   	<h2 class="a11yhidden" id="nav">네비게이션	</h2>
   ```

   -> 웹 접근성을 위해 aria-labelledby를 button 태그에 주고 navigation 태그 id에 aria-lablledby 준것과 동일하게 생성 

   (1-1) 네브

   ``` html
   <nav class="navigation">
    <h2 class="a11yhidden" id="nav">네비게이션</h2>
    <ul>
    	<li>
           <a href="#" id="firstitem">메뉴</a>		</li>
    </ul>
   ```

   -> 두번째 제목을 네브로 정함.

   - <p style="color:red";>네비게이션을 닫기 위한 button 태그</p>

     ``` html
     <button type="button" title="메뉴닫기" class="close-btn" aria-labelledby="nav" onclick="toggle()">
     닫기
     </button>
     ```

2. 메인

   ``` html
   <main>
     <h2 class="a11yhidden">메인</h2>
     <section class="container">
        <h2 class="a11yhidden">커피 메뉴</h2>
   ```

   -> - main에 두번째 제목을 주고 a11yhidden 속성을 줌

   ​    - section 에도 두번째 제목을 주고 a11yhidden 속성을 줌

   ``` html
   <ul>
     <li tabindex="0" onkeypress="if(event.keyCode
   =='13') {clickEventHandler(event);return false;}" onclick="clickEventHandler(event)">
        <figure>
           <div class="img-box">
              <img aria-labelledby="icecherry"src=
               "../img/SVG/Ice/01_Ice_Cherry_Blossom
                _Latte.svg"alt="아이스 벚꽃 라떼">
           </div>
           <figcaption id="icecherry">ICED 벚꽃라떼           </figcaption>
        </figure>
   ```

   -> - 메뉴 리스트를 ul 과 li 태그를 사용하여 리스트화

   ​    - 메뉴의 설명을 부록으로 설정해도 문제가 없게끔 이미지와 	  설명을 각각 독립적으로 설정하기 위해 figure 태그와 		          	  figcaption을 사용 

   ​	- 웹 접근성을 위해 aria-labelledby를 img 태그에 주고          		figcaption 태그 id에 aria-lablledby 준것과 동일하게 생성 

   ``` html
   <dl>
      <dt>
         <p class="dt-title">HOT 벚꽃라떼</p>
         <p>Cherry Blossom Latte</p>
      </dt>
      <dd class="summary">
      은은한 벚꽃향과 라즈베리 화이트 초콜릿 토핑
      </dd>
       
      <dd class="nutrient">
          <div class="nutrient-box left">
             <p>칼로리</p>
             <p>(430kcal)</p>
          </div>
          <div class="nutrient-box right">
             <p>포화지방</p>
             <p>(19.0g)</p>
          </div>
       </dd>
       
       <dd class="close-btn-dd">
          <button class="close-dl-btn"onkeypress=
          "if(event.keyCode=='13') {closeBtn(event);
           return false;}"onclick="closeBtn(event)"
           aria-labelledby="hotcherry" title="닫기">
           정보 닫기
          </button>
       </dd>
   </dl>
   ```

   -> - 메뉴의 설명을 나타내기 위해 카드 뒷면 설정을 dl,dt,dd 로 	설명들 리스트화

   ​	- 성분표를 왼쪽, 오른쪽으로 나누기 위해 p 태그를 div 으로 	그룹핑

   ​	- 카드 뒷면을 끄기 위해 button 태그 생성 