import { Component } from '@angular/core';
import { withHttpTransferCacheOptions } from '@angular/platform-browser';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServers = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Server 01', 'Server 02'];

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000)
  }
  
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'A new server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;   
  }

}
