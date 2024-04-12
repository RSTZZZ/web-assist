import { useRef, useState } from "react";

import { StyledDiv, StyledText } from "../../components";
import { ChatMessage } from "../../types";
import { Header } from "./Header";
import { InputField } from "./InputField";
import { MessageHistory } from "./MessageHistory";
import { generateSessionID } from "./InputField/helper";

type ChatScreenProps = {
  model: string;
  modelSetter: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const ChatScreen = ({ model, modelSetter }: ChatScreenProps) => {
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [modelIsTyping, setModelIsTyping] = useState(false);
  const [sessionID, setSessionID] = useState(generateSessionID()); // Initialize sessionID once
  const uidKey = "web-assist-id";

  return (
    <StyledDiv height="95%" width="100%">
      <Header
        model={model}
        modelSetter={modelSetter}
        sessionID={sessionID}
        sessionSetter={setSessionID}
      />
      <StyledDiv
        width="100%"
        height="85%"
        display="flex"
        flexDirection="column"
      >
        <MessageHistory history={history} modelIsTyping={modelIsTyping} />
        <InputField
          model={model}
          sessionID={sessionID}
          uidKey={uidKey}
          history={history}
          modelIsTyping={modelIsTyping}
          setModelIsTyping={setModelIsTyping}
          setHistory={setHistory}
        />
      </StyledDiv>
    </StyledDiv>
  );
};
