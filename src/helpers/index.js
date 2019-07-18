import ReactHtmlParser from "react-html-parser";

/**
 * @description check if value is empty
 * @param {*} value - input to validate
 * @returns {boolean} -true or false
 */
export const isEmpty = value =>
  value === null ||
  value === undefined ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

/**
 * @description capitalize the initial letter
 * @param {string} string -string
 * @returns {string} capitalized string
 */
export const capitalize = string =>
  typeof string !== "string"
    ? string
    : `${string[0].toUpperCase()}${string.slice(1)}`;

export const parseURL = (parmName, parm) => parm.split(parmName)[1];

/**
 *
 * @param {string} text - body of the article fetched from database
 * @returns {object} - the object containing the body of article, and background image of the article
 */

export const stringToHtmlElement = text => {
  const body = ReactHtmlParser(text);
  let firstImage = "https://picsum.photos/200/300/?random";
  const imageRegEx = /<img .*?>/g;

  const images = text.match(imageRegEx);
  if (images && images.length) {
    const oneImage = images[0].match(/src\s*=\s*"(.+?)"/);
    [firstImage, , ,] = oneImage[0].match(/(["'])(?:(?=(\\?))\2.)*?\1/);
  }
  return {
    body,
    firstImage,
  };
};
