<script>

/*

phone : "+1 5i6-693-2264",

portfolio : "rebabre.com/💼",

email "jujhar@rebabre.com",

github: "jujhar"


*/

  let color = 'rgb(24,39,20)'
  let state = 0;
  let output = 0;
  let initial = 0;
  let contrastMarker = '';

    if (localStorage.getItem("state") !== null) {
      state = localStorage.getItem("state");
      initial = localStorage.getItem("state");

      output = ""
      for (let i = 0; i < state; i++) {
        if ((i >= 10 && i <= 20) || (i >= 30 && i <= 32) || ( i >= 66 && i < 101) || i >= 199) {
          contrastMarker = 'filter: contrast(0.5);';
        } else {
          contrastMarker = '';
        }
        output += "<img style='display: inline;height: 30px;" +
         contrastMarker +
         "' src='https://raw.githubusercontent.com/Silbad/pixa/main/icons/bird.svg' />";
      }
    }

    function onKeyDown(e) {
		 switch(e.keyCode) {
       case 13:
         state++;
				 break;
			 case 38:
       case 87:
       case 68:
       case 73:
       case 76:
       case 32:
       case 175:
       case 221:
         state++;
				 break;
			 case 40:
       case 83:
       case 75:
       case 74:
       case 8:
       case 46:
       case 174:
       case 219:
         state--;
				 break;
      case 19:
      case 7:
          state = initial;
  				break;
       case 48:
       case 82:
           state = 0;
           break;
			 case 37:
       case 65:
         state--;
				 break;
			 case 39:
         state++;
				 break;
		 }
      localStorage.setItem('state', state);

     // set output
     output = ""
     for (let i = 0; i < state; i++) {
       if ((i >= 10 && i <= 19) ||
        (i >= 30 && i <= 32) ||
        ( i >= 65 && i < 100) ||
        i >= 199) {
         contrastMarker = 'filter: contrast(0.5);';
       } else {
         contrastMarker = '';
       }
       output += "<img style='display: inline;height: 30px;" +
        contrastMarker +
        "' src='https://raw.githubusercontent.com/Silbad/pixa/main/icons/bird.svg' />";
     }

     console.log(e.keyCode);
     if (state.toString().includes(5)) {
       color = "#256e11";
     }
     else if (state.toString().includes(7)) {
       color = "#256e11";
     }
     else if (state.toString().includes(8)) {
       color = "#6b7a66";
     }
     else if (state.toString().includes(9)) {
       color = "#464746";
     }
     else {
       color = 'rgb(24,39,20)';
     }
     localStorage.setItem('state', state);

	}
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<svelte:head>
	<title>Count {state}</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<html data-theme="retro" lang="en">
<body style="background-color: {color};">
<div class="mb-10">
<center>
<h1 class="text-3xl" style="margin-bottom:30px;background-color: #f0756e;" title="{state}">
  {@html output}
</h1>
</center>
<input active value="Y" title="Ignore this" />
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
