<script>
import { onMount } from 'svelte';

onMount(() => {
  console.log("yepppi");
})


let state = 0;
if (localStorage.getItem("state") !== null) {
  state = localStorage.getItem("state");
}



function handleClick() {
		//alert('no more alerts')
    if (state == 0){
    e1.innerHTML="ਕੱਲ੍ਹ ਕੀ ਰਾਤ ਕੱਲ੍ਹ ਕੀ ਬਾਤ";
    state = 1;
  } else {
    e1.innerHTML="कल की रात  कल की बात";
    state = 0;
  }
	}



  function handleClick2() {
  		//alert('no more alerts')
      e2.innerHTML="Yesterday's talk is Yesterday's thing";
  	}

    function onKeyDown(e) {
		 switch(e.keyCode) {
       case 13:
         state++;
				 break;
			 case 38:
				 window.alert("system error");
         state++;
				 break;
			 case 40:
				 window.alert("Allah");
         state--;
				 break;
       case 48:
       case 82:
           state = 0;
           break;
			 case 37:
				 window.alert("ALLAH");
         state++;
				 break;
			 case 39:
				 window.alert("allah");
         state++;
				 break;
		 }
     localStorage.setItem('state', state);
	}

</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />
<html data-theme="retro" lang="en">
<body>
<div class="mb-10">
<h1 class="text-3xl" style="margin-bottom:30px">
{state}
</h1>
<input active value="Y" />

<br />
<br />
</div>
<div>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

</div>

</body>
</html>


<style>

@media only screen and (min-width: 1100px) {
  .frame {
    border: 2px solid black;
          background-color: white;
          padding:100px;
          padding-top:20px;
          margin: 0 auto;
          width: 30%;
          margin-top:5%;
          text-align:center
  }
}

  body {
    padding-top: 100px;
    background-color: rgb(24,39,20);
    color: rgb(240,117,110);
    text-align: center;

    font-family:monospace;

    animation: type 2s infinite;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: type;
    position: relative;
  }

  .type {
  animation: type 2s infinite;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: type;
  position: relative;
}

@keyframes type {
      0%   {
          top:0px;
      }
      100% {
          top:4px;
      }
  }

  @keyframes body {
          0%   {
              top:-4px;
          }
          100% {
              top:0px;
          }
      }

      input {
        text-align: center;
      }
  </style>
