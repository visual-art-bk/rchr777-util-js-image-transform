/**
 * Decodes a base64-encoded string into a Uint8Array of binary data.
 *
 * This function converts a base64-encoded image (or any binary data)
 * into a typed array (`Uint8Array`) for use in binary operations, such as image rendering,
 * file uploads, or further processing.
 *
 * @param {string} buffer - The base64-encoded string to decode.
 * @returns {Uint8Array} - The decoded binary data as a Uint8Array.
 *
 * @throws {TypeError} - If the buffer is not a string.
 * @throws {Error} - If the base64 string is invalid or decoding fails.
 *
 * @example
 * const base64 = btoa('Hello'); // "SGVsbG8="
 * const bytes = decodeImageBase64ToUint8({ buffer: base64 });
 * console.log(bytes); // Uint8Array(5) [72, 101, 108, 108, 111]
 */
export const decodeImageBase64ToUint8 = (buffer: string ): Uint8Array => {
  if (typeof buffer !== "string") {
    throw new TypeError('The "buffer" must be a base64-encoded string.');
  }

  try {
    const binaryString = atob(buffer);
    const size = binaryString.length;
    const bytes = new Uint8Array(size);

    for (let i = 0; i < size; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes;
  } catch (error) {
    throw new Error(
      "Failed to decode base64 string. Ensure the input is a valid base64-encoded string."
    );
  }
};
