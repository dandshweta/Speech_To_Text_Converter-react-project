import "./App.css";
import { useState } from "react";
import useClipboard from "react-use-clipboard";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const App = () => {
  const [textCopy, setTextCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textCopy);
  const startListening = () =>
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <div className="app-container">
      <div className="center-content">
        <h2>Speech To Text Converter</h2>
        <div
          className="input-container"
          onClick={() => {
            setTextCopy(transcript);
          }}
        >
          {/* <input type="text" placeholder="Enter speech text" /> */}
          {transcript}
        </div>
        <div className="button-container">
          {/* <button>Copy Speech Text</button> */}
          <button onClick={setCopied}>
            {isCopied ? "copied" : "copy to clipboard"}
          </button>
          <button onClick={startListening}>Start Speech Recognition</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Speech Recognition
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
