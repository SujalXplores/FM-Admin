import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeliveryboydataService } from '../deliveryboydata.service';
import { deliveryboy } from '../deliveryboy';
import { NotificationService } from 'src/app/notification.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-adddeliveryboy',
  templateUrl: './adddeliveryboy.component.html',
  styleUrls: ['./adddeliveryboy.component.css']
})
export class AdddeliveryboyComponent implements OnInit, OnDestroy {
  constructor(
    private notificationService: NotificationService,
    private _deliveryboydata: DeliveryboydataService,
    private dialogRef: MatDialogRef<AdddeliveryboyComponent>
  ) { }

  arrDeliveryboy: deliveryboy[] = [];
  selectedFile: File = null;
  value = '';
  private unsubscribe = new Subject();
  loading: boolean = false;

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onDeliveryboyAdd(f) {
    this.loading = true;
    let fd = new FormData();
    fd.append('deliveryboy_id', f.value.deliveryboy_id);
    fd.append('deliveryboy_name', f.value.deliveryboy_name);
    fd.append('deliveryboy_address', f.value.deliveryboy_address);
    fd.append('deliveryboy_mobileno', f.value.deliveryboy_mobileno);
    fd.append('deliveryboy_email', f.value.deliveryboy_email);
    fd.append('password', f.value.password);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this._deliveryboydata.addDeliveryboy(fd).pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      this._deliveryboydata.do_Refresh();
      this.notificationService.success('✔️ Record added successfully !');
      this.loading = false;
      this.dialogRef.close();
    });
  }

  onChange(f) {
    this.selectedFile = <File>f.target.files[0];
  }

  onClose() {
    this.dialogRef.close();
  }
}