import chatsIcon from "../../assets/chats.svg";
import callsIcon from "../../assets/calls.svg";
import usersIcon from "../../assets/users.svg";
import groupsIcon from "../../assets/groups.svg";
import "../../styles/CometChatSelector/CometChatTabs.css";
import { useState } from "react";
import { getLocalizedString } from "@cometchat/chat-uikit-react";

export const CometChatTabs = (props: {
    onTabClicked?: (tabItem: { name: string; icon: string;id:string }) => void;
    activeTab?: string;
}) => {
    const {
        onTabClicked = () => { },
        activeTab
    } = props;
    const [hoverTab, setHoverTab] = useState("");

    const tabItems = [{
        "name": getLocalizedString("conversation_chat_title"),
        "icon": chatsIcon,
        "id":"chats"
    }, {
        "name": getLocalizedString("call_logs_title"),
        "icon": callsIcon,
        "id":"calls"
    }, {
        "name": getLocalizedString("user_title"),
        "icon": usersIcon,
        "id":"users"
    }, {
        "name": getLocalizedString("group_title"),
        "icon": groupsIcon,
        "id":"groups"
    }]

    return (
        <div className="cometchat-tab-component">
            {tabItems.map((tabItem) => (
                <div
                    key={tabItem.name}
                    className="cometchat-tab-component__tab"
                    onClick={() => onTabClicked(tabItem)}
                >
                    <div
                        className={(activeTab === tabItem.id || hoverTab === tabItem.id) ? "cometchat-tab-component__tab-icon cometchat-tab-component__tab-icon-active" : "cometchat-tab-component__tab-icon"}
                        style={tabItem.icon ? { WebkitMask: `url(${tabItem.icon}) center center no-repeat` } : undefined}
                        onMouseEnter={() => setHoverTab(tabItem.id)}
                        onMouseLeave={() => setHoverTab("")}
                    />
                    <div
                        className={(activeTab === tabItem.id || hoverTab === tabItem.id) ? "cometchat-tab-component__tab-text cometchat-tab-component__tab-text-active" : "cometchat-tab-component__tab-text"}
                        onMouseEnter={() => setHoverTab(tabItem.id)}
                        onMouseLeave={() => setHoverTab("")}
                    >
                        {tabItem.name}
                    </div>
                </div>
            ))}
        </div>
    )
}