import {Component, forwardRef, ChangeDetectionStrategy} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagsInputComponent),
    multi: true
  }]
})

export class TagsInputComponent implements ControlValueAccessor {
  name = '';
  prevValue = '';
  tagValue: string[];
  placeholder = 'Start typing';

  onChange = (value: string[]) => {};
  onTouch = () => {};

  removeItem(index): void {
    this.tagValue = this.tagValue.filter((_, i) => i !== index);
    this.onChange(this.tagValue);
  }

  typing(value): void {
    if (value.key === 'Backspace' && this.tagValue.length && !this.prevValue.length) {
      this.tagValue = this.tagValue.slice(0, -1);
      this.onChange(this.tagValue);
    }
    this.prevValue = this.name;
  }

  enterTag(event: any): void {
    const value = event.target.value.trim();
    if (value) {
      this.tagValue.push(event.target.value);
      this.tagValue = [...new Set(this.tagValue)];
      this.name = '';
      this.onChange(this.tagValue);
    }
  }

  writeValue(value: string[]): void {
    this.tagValue = value;
  }

  registerOnChange(fn: any): void{
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void{
    this.onTouch = fn;
  }

}
