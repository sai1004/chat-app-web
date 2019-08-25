import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { ChatRoomComponent } from "../app/pages/chat-room/chat-room.component";
import { UsersChatListComponent } from "./components/users-chat-list/users-chat-list.component";
import { ChatBoxComponent } from "./components/chat-box/chat-box.component";
import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SharedModule } from "./shared/shared.module";
import { from } from "rxjs";

// import { CartItemService } from './components/cart-item.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatRoomComponent,
    UsersChatListComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatFormFieldModule,
    SharedModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
