import axios from "axios";
import { API_URL } from "../config";

export const useRequest = () => {
  const convertToLinearObject = (model, form = null, namespace = null) => {
    form = form || {};

    for (let propertyName in model) {
      if (!model.hasOwnProperty(propertyName) || model[propertyName] === undefined) {
        continue;
      }

      let formKey = namespace ? `${namespace}[${propertyName}]` : propertyName;

      if (model[propertyName] instanceof Date) {
        form[formKey] = model[propertyName];
      } else if (model[propertyName] instanceof Array) {
        model[propertyName].forEach((element, index) => {
          if (typeof element != "object" || element instanceof File) {
            form[`${formKey}[${index}]`] = element;
          } else {
            convertToLinearObject(element, form, `${formKey}[${index}]`);
          }
        });
      } else if (typeof model[propertyName] === "object" && !(model[propertyName] instanceof File)) {
        convertToLinearObject(model[propertyName], form, formKey);
      } else {
        form[formKey] = model[propertyName].toString();
      }
    }

    return form;
  };

  const objectToFormData = (object) => {
    const obj = convertToLinearObject(object);
    const form = new FormData();

    Object.keys(obj).map((key) => {
      form.append(key, obj[key]);
    });

    return form;
  };

  const getSerializedParams = (params = {}) => {
    const keys = Object.keys(params);

    let serializedParams = "";

    if (!!keys.length) {
      serializedParams = "?";
    }

    keys.map((key, index) => {
      if (index > 0) {
        serializedParams += "&";
      }

      serializedParams += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    });

    return serializedParams;
  };

  const request = ({ url, method, headers = {}, data = {}, debug = false, loader = false }) => {
    return new Promise((resolve, reject) => {
      axios({ url, method, headers, data })
        .then((response) => {
          if (!!response && !!response.data) {
            if (debug) {
              console.log("REQUEST %c[SUCCESS]", "color: green", { url, method, headers, data: response.data });
            }

            return resolve(response.data);
          }

          const error = new Error("Invalid response!");

          if (debug) {
            console.log("REQUEST %c[ERROR]", "color: red", { url, method, headers, data, error });
          }

          reject(error);
        })
        .catch((error) => {
          if (debug) {
            console.log("REQUEST %c[ERROR]", "color: red", { url, method, headers, data, error });
          }

          reject({ error });
        });
    });
  };

  const get = ({ endpoint = "", params = {}, headers = {}, debug = false }) => {
    const config = {
      url: `${API_URL}/${endpoint}` + getSerializedParams(params),
      method: "GET",
      data: {},
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        ...headers,
      },
      debug,
    };

    return request(config);
  };

  const post = ({ endpoint = "", params = {}, headers = {}, data = {}, debug = false }) => {
    const config = {
      url: `${API_URL}/${endpoint}` + getSerializedParams(params),
      method: "POST",
      data: objectToFormData(data),
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        ...headers,
      },
      debug,
    };

    return request(config);
  };

  return { get, post, request, objectToFormData, getSerializedParams, convertToLinearObject };
};
