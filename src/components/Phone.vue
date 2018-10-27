<template>
  <div
    class = "Phone">
    <div
      class = "StatusBar"
      />
    <iframe 
      v-bind:src = "src" 
      frameborder = "0"
      class = "PhoneBody"
      />
    <div
      class = "iPhoneXBar"
      />
  </div>
</template>

<script>
export default {
  name: 'Phone',
  data: function () {
    return {}
  },
  computed: {
    src: function() {
      let src = new String();
      let port = "0000"; //port number

      src = `${window.location.protocol}//${window.location.hostname}:${port}/#/`;

      return src;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Phone {
  background: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.StatusBar {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.StatusBar::after,
.StatusBar::before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
}
.StatusBar::before {
  content: "09:00";
  left: 0;
  color: black;
}
.StatusBar::after {
  content: "CLICK";
  right: 0;
  color: rgb(255, 217, 85);
}
.PhoneBody {
  flex: 1;
}

/* ----- iPhone ----- */

/* ----- iPhone SE ----- */
/* ----- 320 * 568 ----- */
@media screen and
  (height: 568px) and
  (width: 320px) {
    .StatusBar {
      height: 20px;
    }
    .StatusBar::after,
    .StatusBar::before {
      font-size: 12px;
      line-height: 12px;
    }
    .StatusBar::before {
      padding: 0 0 0 0;
    }
    .StatusBar::after {
      padding: 0 0 0 0;
    }
}

/* ----- iPhone6 ----- */
/* ----- 375 * 667 ----- */
@media screen and
  (height: 667px) and
  (width: 375px) {
    .StatusBar {
      height: 20px;
    }
    .StatusBar::after,
    .StatusBar::before {
      font-size: 12px;
      line-height: 12px;
    }
    .StatusBar::before {
      padding: 0 0 0 0;
    }
    .StatusBar::after {
      padding: 0 0 0 0;
    }
}

/* ----- iPhone6 P ----- */
/* ----- 414 * 736 ----- */
@media screen and
  (height: 736px) and
  (width: 414px) {
    .StatusBar {
      height: 20px;
    }
    .StatusBar::after,
    .StatusBar::before {
      font-size: 12px;
      line-height: 12px;
    }
    .StatusBar::before {
      padding: 0 0 0 0;
    }
    .StatusBar::after {
      padding: 0 0 0 0;
    }
}

/* ----- iPhoneX ----- */
/* ----- 375 * 812 ----- */
@media screen and
  (height: 812px) and
  (width: 375px) {
    .StatusBar {
      height: 44px;
    }
    .StatusBar::after,
    .StatusBar::before {
      font-size: 16px;
      line-height: 16px;
    }
    .StatusBar::before {
      padding: 0 0 0 26px;
    }
    .StatusBar::after {
      padding: 0 26px 0 0;
    }
    .iPhoneXBar {
      position: fixed;
      width: 100%;
      bottom: 0;
      left: 0;
      right: 0;
      height: 34px;
      text-align: center;
    }
    .iPhoneXBar::after {
      background: black;
      border-radius: 3px;
      top: 50%;
      left: 50%;
      width: 160px;
      height: 6px;
      content: " ";
      position: absolute;
      transform: translate(-50%, -50%);
    }
}

/* ----- iPhone ----- */

</style>
