import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit, AfterViewInit {
  title = 'Bài tập tự làm 2';
  constructor(private renderer: Renderer2) {
  }
  ngOnInit() {  
  }
  ngAfterViewInit() { 
    this.loadScripts();
  }
  public loadScripts() {
    this.renderExternalScript('assets/js/main.js').onload = () => {
    }
  }
public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }
  
}
