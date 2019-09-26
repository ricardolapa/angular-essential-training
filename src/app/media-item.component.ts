import { Component } from '@angular/core';

@Component({
	selector: 'mw-media-item',
	templateUrl: './media-item.component.html',
	styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
	public name: string = 'The Redemption';

	/**
	 * wasWatched
	 */
	public wasWatched() {
		return true;
	}
}
