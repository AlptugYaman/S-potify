import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';

import { routing,
         appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './component/navbar/navbar.component';
import { SearchComponent }  from './component/search/search.component';
import { AboutComponent }  from './component/about/about.component';
import { ArtistComponent }  from './component/artist/artist.component';
import { AlbumComponent }  from './component/album/album.component';
import { SpotifyService }  from './services/spotify.service';


@NgModule({
  imports: [ BrowserModule
    ,FormsModule
    ,routing
    ,HttpModule,
     ],

  declarations: [ AppComponent
    ,NavbarComponent
    ,SearchComponent
    ,AboutComponent
    ,ArtistComponent
    ,AlbumComponent
     ],

  providers: [
    appRoutingProviders
    ,SpotifyService
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
