import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { CommonComponent } from '../common.component';
import { ToastrService } from 'ngx-toastr';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HelplineService } from 'src/app/Services/helpline.service';
import { Result } from 'src/app/Util/Util';
import { HelplineNumber } from 'src/app/Util/Helpline';

@Component({
  selector: 'app-helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.scss']
})
export class HelplineComponent extends CommonComponent implements OnInit {

  constructor(override toastrService: ToastrService, private _liveAnnouncer: LiveAnnouncer, private helplineService: HelplineService) {
    super(toastrService, _liveAnnouncer);

    this.displayedColumns = ["srno", "number", "actions"]
  }

  public ngOnInit(): void {

    this.onSubmit = this.addHelplineNumber

    this.getHelplineNumbers();
  }

  helplineNumbers: Array<HelplineNumber>
  number: string

  getHelplineNumbers() {
    this.helplineService.getAllHelplineNumbers().subscribe((result: Result) => {
      this.helplineNumbers = result.data as Array<HelplineNumber>
      this.dataSource = this.helplineNumbers.map((e: HelplineNumber, index: number) =>
      ({
        _id: e._id,
        srno: `#Q0${index}`,
        number: e.number
      }))
      this.getHelplineNumbers()
    })

  }

  addHelplineNumber = async () => {
    this.helplineService.addHelplineNumber(this.number).subscribe((result: Result) => {
      this.showSuccessToaster("Success")
    })
  }


  editHelplineNumber = () => {

  }


}
