export interface StylingParams {

  // direction: ltr / rtl
  dir?: string;

  // modal name for header
  modalName?: string;
  
  // unique classes
  uniqueOpacityClass?: string;
  uniqueBodyClass?: string;
  uniqueHeaderClass?: string;

  // sizing
  minHeight?: string;
  maxHeight?: string;
  height?: string;
  minWidth?: string;
  maxWidth?: string;
  width?: string;

  // header styling
  headerBackgroundColor?: string;
  headerColor?: string;

  // maximize sizes
  maximizeHeight?: string;
  maximizeWidth?: string;

  // show or not to show certain elements
  showHeader?: boolean;
  showMaximize?: boolean;

  // use class based fonts like font-awesome for modal header functions ex. 'fas fa-times'
  closeBtnFontClasses?: string;
  closeBtnText?: string;
  maximizeBtnFontClasses?: string;
  maximizeBtnText?: string;
}
