import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app'

	constructor(private http: HttpClient) {
		this.htmlToPDF()
	}

	htmlToPDF() {
		var fileList = 'assets/sa/Indian-Hockey.html'
		var pdfFile = 'assets/sa/lesson2.pdf'
		this.http.get(pdfFile, { responseType: 'arraybuffer' }).subscribe(data => {
			console.log(data)

			if (data) {
				let file = new Blob([data], { type: 'application/pdf' });            
				var fileURL = URL.createObjectURL(file);
				window.open(fileURL)
			}
		})
	}
}