import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatRoomComponent } from "./chat-room.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

import { UsersChatListComponent } from "../../components/users-chat-list/users-chat-list.component";
import { ChatBoxComponent } from "../../components/chat-box/chat-box.component";

const routes: Routes = [{ path: "chatroom", component: ChatRoomComponent }];

@NgModule({
  declarations: [ChatRoomComponent, UsersChatListComponent, ChatBoxComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class ChatRoomModule {}
