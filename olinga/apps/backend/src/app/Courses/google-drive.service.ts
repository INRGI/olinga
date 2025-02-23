import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as fs from 'fs';
import * as mime from 'mime-types';
import { Readable } from 'stream';

@Injectable()
export class GoogleDriveService {
  private driveClient;

  constructor() {
    const auth = new google.auth.GoogleAuth({
      keyFile: './olinga-451714-b21be58ed563.json',
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    this.driveClient = google.drive({ version: 'v3', auth });
  }

  async uploadFile(file: any): Promise<string> {
    const buffer = await file.toBuffer();
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    const fileMetadata = {
      name: `${Date.now()}-${file.filename}`,
      parents: ['1-p-RqhZz-wrifb8PwwvYoGR53w-EJabB'],
    };

    const media = {
      mimeType: mime.lookup(file.filename) || 'application/octet-stream',
      body: stream,
    };

    const response = await this.driveClient.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id',
    });

    return `https://drive.google.com/thumbnail?id=${response.data.id}&sz=w1000`;
  }
}
