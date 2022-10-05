/**
 * The properties of the `RscFileDownloadSection` component
 */
export interface IRscFileDownloadSection {
  /**
   * The list of files
   */
  fileList: IRscPdf[];
}

/**
 * The properties of a single `RscPdf` file component
 */
export interface IRscPdf {
  /**
   * The name of the Pdf
   */
  name?: string;
  /**
   * The url to download the Pdf
   */
  url?: string;
}
