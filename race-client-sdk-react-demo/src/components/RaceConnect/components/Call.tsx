import { FC } from "react";
import {
	CallContainer,
	CallButtonsContainer,
	SeperatorParagraph,
	LabelWithMargin,
	ButtonsLink
} from "../index.styles";
import Icon from "../icons";
import { useConfigContext } from "src/hooks/useConfigContext";
import { Button } from "@twilio-paste/core/button";

export const Call: FC = () => {

	const { config } = useConfigContext();

	return (
		<CallContainer>
			<CallButtonsContainer>
				<LabelWithMargin>Click to call via your phone.</LabelWithMargin>
				<ButtonsLink href={`tel:${config?.phoneNumer}`}>
					<Icon icon="call" />
					+44 345 8800 808
				</ButtonsLink>
				<SeperatorParagraph />
				<LabelWithMargin>
					Click to call via WebRTC. (WiFi Call)
				</LabelWithMargin>
				<Button variant="secondary">
					<Icon icon="call" />
					WebRTC Call
				</Button>
			</CallButtonsContainer>
			{/* {hangUpButton ? (
					<Button onClick={() => disconnect()} variant="primary">
						<Icon view="0 0 640 512" color="#fff" icon="hangup" />
					</Button>
				) : null} */}
		</CallContainer>
	);
}


export default Call;
