let detail = document.getElementById("detail");
 let lostitem =  document.getElementById("lost");
 let founditem =  document.getElementById("found");

function requireLoginForReport() {
  if (!getCurrentUser()) {
    alert("Please login first to report an item.");
    window.location.href = "../index.html";
    return false;
  }
  return true;
}
    // lostitem.style.fontSize = "23px";

    
      detail.innerHTML = `      
<h3 class="container-headings">Item Name *</h3>
        <input type="text" placeholder="e.g. ID card , Mobile, wallet" />

        <h3 class="container-headings">Description *</h3>
        <textarea placeholder="Provide a detailed description of the item including color, brand, features" style="height: 100px;"></textarea>

        <h3 class="container-headings">Category *</h3>
        <select>
          <option value="select">Select a category</option>
          <option value="select">Select a category</option>
          <option value="select">Select a category</option>
          <option value="select">Select a category</option>
        </select>

        <div class="content1">

          <div class="content1-1">
            <h3 class="container-headings">Location Last Seen *</h3>
            <input type="text" placeholder="e.g. Library 2nd floor, Studemt Union"/>
          </div>

          <div class="content1-2">
            <h3 class="container-headings">Date Lost *</h3>
            <input type="date" name="" id="" />
          </div>

        </div>

        <h3 class="container-headings">Upload Image (Optional)</h3>
        <input type="file" style="height:60px;"/>

        <div class="content2">
          <h3 class="container-headings">Contact Information</h3>

          <div class="content2-inner">
            <div class="content2-inner-1">
              <h3 class="container-headings">Your Name *</h3>
              <input type="text" placeholder="e.g. john"/>
            </div>

            <div class="content2-inner-2">
              <h3 class="container-headings">Email address *</h3>
              <input type="email" placeholder="e.g. abc123@gmail.com" />
            </div>
          </div>
        </div>
      </div>

<button class="content3">
  <img src="./assets/send-logo.png" alt="" width="25px">
  
  Submit lost Item report
</button>
        `







    function lost() {
      if (!requireLoginForReport()) return;

      lostitem.style.backgroundColor = "white";
       founditem.style.backgroundColor="";
    // founditem.style.fontSize = "23px";
      // lostitem.style.fontSize = "23px";

      // founditem.style.fontSize = "22px";



      detail.innerHTML = 
      `      
<h3 class="container-headings">Item Name *</h3>
        <input type="text" placeholder="e.g. ID card , Mobile, wallet" />

        <h3 class="container-headings">Description *</h3>
        <textarea placeholder="Provide a detailed description of the item including color, brand, features" style="height: 100px;"></textarea>

        <h3 class="container-headings">Category *</h3>
        <select>
          <option value="select">Select a category</option>
          <option value="select">Select a category</option>
          <option value="select">Select a category</option>
          <option value="select">Select a category</option>
        </select>

        <div class="content1">

          <div class="content1-1">
            <h3 class="container-headings">Location Last Seen *</h3>
            <input type="text" placeholder="e.g. Library 2nd floor, Studemt Union"/>
          </div>

          <div class="content1-2">
            <h3 class="container-headings">Date Lost *</h3>
            <input type="date" name="" id="" />
          </div>

        </div>

        <h3 class="container-headings">Upload Image (Optional)</h3>
        <input type="file" style="height:60px;"/>

        <div class="content2">
          <h3 class="container-headings">Contact Information</h3>

          <div class="content2-inner">
            <div class="content2-inner-1">
              <h3 class="container-headings">Your Name *</h3>
              <input type="text" placeholder="e.g. john"/>
            </div>

            <div class="content2-inner-2">
              <h3 class="container-headings">Email address *</h3>
              <input type="email" placeholder="e.g. abc123@gmail.com"/>
            </div>
          </div>
        </div>
      </div>

<button class="content3">
    <img src="./assets/send-logo.png" alt="" width="25px">
  Submit lost Item report
</button>
`
;
    }



    function found() {
      if (!requireLoginForReport()) return;

    //      let founditem = document.getElementById("found").style.backgroundColor="white";
    // let lostitem = document.getElementById("lost").style.backgroundColor = "";


       lostitem.style.backgroundColor = "";
       founditem.style.backgroundColor="white";
      // founditem.style.fontSize = "23px";
      // lostitem.style.fontSize = "22px";




      detail.innerHTML = 
       `      
<h3 class="container-headings">Item Name *</h3>
        <input type="text" placeholder="e.g. ID card , Mobile, wallet" />

        <h3 class="container-headings">Description *</h3>
        <textarea placeholder="Provide a detailed description of the item including color, brand, features" style="height: 100px;"></textarea>

        <h3 class="container-headings">Category *</h3>
        <select>
          <option value="select">Select a category</option>
          <option value="select">Select a category</option>
          <option value="select">Select a category</option>
          <option value="select">Select a category</option>
        </select>

        <div class="content1">

          <div class="content1-1">
            <h3 class="container-headings">Location found *</h3>
            <input type="text" placeholder="e.g. Library 2nd floor, Studemt Union"/>
          </div>

          <div class="content1-2">
            <h3 class="container-headings">Date Found *</h3>
            <input type="date" name="" id="" />
          </div>

        </div>

        <h3 class="container-headings">Upload Image (Optional)</h3>
        <input type="file" style="height:60px;"/>

        <div class="content2">
          <h3 class="container-headings">Contact Information</h3>

          <div class="content2-inner">
            <div class="content2-inner-1">
              <h3 class="container-headings">Your Name *</h3>
              <input type="text" placeholder="e.g. john"/>
            </div>

            <div class="content2-inner-2">
              <h3 class="container-headings">Email address *</h3>
              <input type="email" placeholder="e.g. abc123@gmail.com"/>
            </div>
          </div>
        </div>
      </div>

<button class="content3">
    <img src="./assets/send-logo.png" alt="" width="25px">
  Submit Found Item report
</button>
        `;
    }