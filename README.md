# Image Processing API (NodeJS, Express, Sharp)

The Image Processing API takes an image of your choice and processes it according to your specifications. The processed images can be used however you see fit. Once your image is processed, you can even use the image source as a placeholder image in other projects.

Once your image has been processed, subsequent requests of the same specifications will be served from the cache for efficiency.

## Installation

Clone the GitHub repository, cd into the Image-Processing-API root directory, and run npm install to install necessary dependencies.

```
git clone https://github.com/eorosales/image-processing-api.git
cd image-processing-api
npm install
```

## Start the Server

Serve locally at localhost://3000

```
npm run start
```

## Resizing an image using Sharp

### Setting up your input image to be resized

1. Open the 'Image-Processing-API' project directory
2. Navigate to '/public/input' (there should be a file already in there called 'dtsj.jpg')
3. Drag and drop or copy and paste your image into the directory.
4. Open your preferred browser application.

\* Currently, the API formats images into jpeg files.

### API Endpoint Usage

In the URL, copy and paste the following while including the name of the file without its extension (ex: _.jpeg, _.png, \*.gif) and your size specifications in the request.

```
localhost:3000/api/resize?title=[YOUR-FILE-NAME]&width=[YOUR-OUTPUT-FILE-WIDTH]&height=[YOUR-OUTPUT-FILE-HEIGHT]
```

### Finding Your Processed Image

1. Open the 'Image-Processing-API' project directory
2. Navigate to '/public/output' (there should be a file already in there called 'dtsj.jpg')
3. Your newly added processed image should now be renamed '[YOUR-FILE-NAME]\_[WIDTH]x[HEIGHT].jpeg'

## Testing

To test, open your CLI and, navigate to the Image-Processing-API root directory and run the following script:

```
npm run test
```
