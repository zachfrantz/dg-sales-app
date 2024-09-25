const captions = window.document.getElementById("captions");

async function getMicrophone() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return new MediaRecorder(stream);
  } catch (error) {
    console.error("Error accessing microphone:", error);
    throw error;
  }
}

async function openMicrophone(microphone, socket) {
  return new Promise((resolve) => {
    microphone.onstart = () => {
      console.log("WebSocket connection opened");
      document.body.classList.add("recording");
      resolve();
    };

    microphone.onstop = () => {
      console.log("WebSocket connection closed");
      document.body.classList.remove("recording");
    };

    microphone.ondataavailable = (event) => {
      if (event.data.size > 0 && socket.readyState === WebSocket.OPEN) {
        socket.send(event.data);
      }
    };

    microphone.start(1000);
  });
}

async function closeMicrophone(microphone) {
  microphone.stop();
}

async function start(socket) {
  const listenButton = document.querySelector("#record");
  let microphone;

  console.log("client: waiting to open microphone");

  listenButton.addEventListener("click", async () => {
    if (!microphone) {
      try {
        microphone = await getMicrophone();
        await openMicrophone(microphone, socket);
      } catch (error) {
        console.error("Error opening microphone:", error);
      }
    } else {
      await closeMicrophone(microphone);
      microphone = undefined;
    }
  });
}

function handleTranscription(transcriptionText) {
  const transcriptionDiv = document.getElementById('transcription');
  if (transcriptionDiv) {
    const newTranscription = document.createElement('p');
    newTranscription.textContent = transcriptionText;
    transcriptionDiv.appendChild(newTranscription);
    
    // Autoscroll to the bottom of the transcription div
    transcriptionDiv.scrollTop = transcriptionDiv.scrollHeight;
  } else {
    console.error('Transcription element not found');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const socket = new WebSocket("ws://localhost:3000");

  socket.addEventListener("open", async () => {
    console.log("WebSocket connection opened");
    await start(socket);
  });

  socket.addEventListener("message", (event) => {
    const data = JSON.parse(event.data);
    if (data.channel.alternatives[0].transcript !== "") {
      handleTranscription(data.channel.alternatives[0].transcript);
    }
  });

  socket.addEventListener("close", () => {
    console.log("WebSocket connection closed");
  });
});
