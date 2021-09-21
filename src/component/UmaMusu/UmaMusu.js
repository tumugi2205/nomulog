import React, {useState, useEffect} from "react"
import "./UmaMusu.css"
import ハルウララ from './images/ハルウララ.png'

const uma_data = {"スペシャルウィーク": {"スペシャルウィーク": 0, "サイレンススズカ": 8, "トウカイテイオー": 5, "マルゼンスキー": 4, "オグリキャップ": 9, "ダイワスカーレット": 4, "タイキシャトル": 2, "メジロマックイーン": 11, "エルコンドルパサー": 8, "シンボリルドルフ": 7, "エアグルーヴ": 4, "ライスシャワー": 6, "ゴールドシップ": 10, "ウォッカ": 8, "グラスワンダー": 13, "マヤノトップガン": 10, "メジロライアン": 7, "アグネスタキオン": 8, "ウィニングチケット": 11, "サクラバクシンオー": 3, "スーパークリーク": 13, "ハルウララ": 1, "マチカネフクキタル": 12, "ナイスネイチャ": 14, "キングヘイロー": 9}, "サイレンススズカ": {"スペシャルウィーク": 14, "サイレンススズカ": 0, "トウカイテイオー": 8, "マルゼンスキー": 13, "オグリキャップ": 9, "ダイワスカーレット": 7, "タイキシャトル": 3, "メジロマックイーン": 11, "エルコンドルパサー": 5, "シンボリルドルフ": 4, "エアグルーヴ": 7, "ライスシャワー": 5, "ゴールドシップ": 10, "ウォッカ": 5, "グラスワンダー": 6, "マヤノトップガン": 16, "メジロライアン": 7, "アグネスタキオン": 10, "ウィニングチケット": 9, "サクラバクシンオー": 3, "スーパークリーク": 12, "ハルウララ": 1, "マチカネフクキタル": 15, "ナイスネイチャ": 10, "キングヘイロー": 2}, "トウカイテイオー": {"スペシャルウィーク": 8, "サイレンススズカ": 6, "トウカイテイオー": 0, "マルゼンスキー": 4, "オグリキャップ": 6, "ダイワスカーレット": 15, "タイキシャトル": 4, "メジロマックイーン": 16, "エルコンドルパサー": 11, "シンボリルドルフ": 14, "エアグルーヴ": 13, "ライスシャワー": 12, "ゴールドシップ": 8, "ウォッカ": 12, "グラスワンダー": 4, "マヤノトップガン": 8, "メジロライアン": 3, "アグネスタキオン": 10, "ウィニングチケット": 7, "サクラバクシンオー": 3, "スーパークリーク": 12, "ハルウララ": 1, "マチカネフクキタル": 5, "ナイスネイチャ": 9, "キングヘイロー": 2}, "マルゼンスキー": {"スペシャルウィーク": 4, "サイレンススズカ": 7, "トウカイテイオー": 2, "マルゼンスキー": 0, "オグリキャップ": 8, "ダイワスカーレット": 7, "タイキシャトル": 10, "メジロマックイーン": 1, "エルコンドルパサー": 7, "シンボリルドルフ": 4, "エアグルーヴ": 2, "ライスシャワー": 3, "ゴールドシップ": 2, "ウォッカ": 6, "グラスワンダー": 7, "マヤノトップガン": 6, "メジロライアン": 1, "アグネスタキオン": 3, "ウィニングチケット": 3, "サクラバクシンオー": 9, "スーパークリーク": 4, "ハルウララ": 5, "マチカネフクキタル": 3, "ナイスネイチャ": 1, "キングヘイロー": 9}, "オグリキャップ": {"スペシャルウィーク": 11, "サイレンススズカ": 7, "トウカイテイオー": 6, "マルゼンスキー": 10, "オグリキャップ": 0, "ダイワスカーレット": 15, "タイキシャトル": 9, "メジロマックイーン": 7, "エルコンドルパサー": 13, "シンボリルドルフ": 7, "エアグルーヴ": 4, "ライスシャワー": 3, "ゴールドシップ": 8, "ウォッカ": 17, "グラスワンダー": 16, "マヤノトップガン": 8, "メジロライアン": 10, "アグネスタキオン": 10, "ウィニングチケット": 12, "サクラバクシンオー": 2, "スーパークリーク": 14, "ハルウララ": 1, "マチカネフクキタル": 11, "ナイスネイチャ": 12, "キングヘイロー": 5}, "ダイワスカーレット": {"スペシャルウィーク": 6, "サイレンススズカ": 6, "トウカイテイオー": 12, "マルゼンスキー": 8, "オグリキャップ": 12, "ダイワスカーレット": 0, "タイキシャトル": 10, "メジロマックイーン": 10, "エルコンドルパサー": 13, "シンボリルドルフ": 8, "エアグルーヴ": 11, "ライスシャワー": 7, "ゴールドシップ": 6, "ウォッカ": 14, "グラスワンダー": 11, "マヤノトップガン": 5, "メジロライアン": 2, "アグネスタキオン": 6, "ウィニングチケット": 5, "サクラバクシンオー": 3, "スーパークリーク": 9, "ハルウララ": 1, "マチカネフクキタル": 6, "ナイスネイチャ": 4, "キングヘイロー": 2}, "タイキシャトル": {"スペシャルウィーク": 2, "サイレンススズカ": 5, "トウカイテイオー": 8, "マルゼンスキー": 16, "オグリキャップ": 11, "ダイワスカーレット": 13, "タイキシャトル": 0, "メジロマックイーン": 7, "エルコンドルパサー": 15, "シンボリルドルフ": 8, "エアグルーヴ": 7, "ライスシャワー": 9, "ゴールドシップ": 2, "ウォッカ": 10, "グラスワンダー": 12, "マヤノトップガン": 2, "メジロライアン": 3, "アグネスタキオン": 4, "ウィニングチケット": 2, "サクラバクシンオー": 17, "スーパークリーク": 7, "ハルウララ": 1, "マチカネフクキタル": 6, "ナイスネイチャ": 2, "キングヘイロー": 14}, "メジロマックイーン": {"スペシャルウィーク": 10, "サイレンススズカ": 7, "トウカイテイオー": 12, "マルゼンスキー": 2, "オグリキャップ": 5, "ダイワスカーレット": 9, "タイキシャトル": 3, "メジロマックイーン": 0, "エルコンドルパサー": 6, "シンボリルドルフ": 11, "エアグルーヴ": 8, "ライスシャワー": 12, "ゴールドシップ": 13, "ウォッカ": 6, "グラスワンダー": 3, "マヤノトップガン": 11, "メジロライアン": 7, "アグネスタキオン": 5, "ウィニングチケット": 6, "サクラバクシンオー": 4, "スーパークリーク": 14, "ハルウララ": 1, "マチカネフクキタル": 6, "ナイスネイチャ": 10, "キングヘイロー": 3}, "エルコンドルパサー": {"スペシャルウィーク": 9, "サイレンススズカ": 3, "トウカイテイオー": 7, "マルゼンスキー": 8, "オグリキャップ": 11, "ダイワスカーレット": 13, "タイキシャトル": 12, "メジロマックイーン": 6, "エルコンドルパサー": 0, "シンボリルドルフ": 10, "エアグルーヴ": 6, "ライスシャワー": 9, "ゴールドシップ": 3, "ウォッカ": 11, "グラスワンダー": 14, "マヤノトップガン": 2, "メジロライアン": 3, "アグネスタキオン": 3, "ウィニングチケット": 2, "サクラバクシンオー": 3, "スーパークリーク": 6, "ハルウララ": 1, "マチカネフクキタル": 2, "ナイスネイチャ": 5, "キングヘイロー": 4}, "シンボリルドルフ": {"スペシャルウィーク": 12, "サイレンススズカ": 3, "トウカイテイオー": 14, "マルゼンスキー": 7, "オグリキャップ": 8, "ダイワスカーレット": 10, "タイキシャトル": 8, "メジロマックイーン": 15, "エルコンドルパサー": 13, "シンボリルドルフ": 0, "エアグルーヴ": 11, "ライスシャワー": 17, "ゴールドシップ": 13, "ウォッカ": 4, "グラスワンダー": 7, "マヤノトップガン": 12, "メジロライアン": 4, "アグネスタキオン": 6, "ウィニングチケット": 5, "サクラバクシンオー": 4, "スーパークリーク": 16, "ハルウララ": 1, "マチカネフクキタル": 3, "ナイスネイチャ": 9, "キングヘイロー": 2}, "エアグルーヴ": {"スペシャルウィーク": 6, "サイレンススズカ": 6, "トウカイテイオー": 12, "マルゼンスキー": 3, "オグリキャップ": 4, "ダイワスカーレット": 13, "タイキシャトル": 3, "メジロマックイーン": 11, "エルコンドルパサー": 9, "シンボリルドルフ": 10, "エアグルーヴ": 0, "ライスシャワー": 8, "ゴールドシップ": 7, "ウォッカ": 9, "グラスワンダー": 3, "マヤノトップガン": 4, "メジロライアン": 3, "アグネスタキオン": 7, "ウィニングチケット": 7, "サクラバクシンオー": 3, "スーパークリーク": 11, "ハルウララ": 1, "マチカネフクキタル": 5, "ナイスネイチャ": 5, "キングヘイロー": 2}, "ライスシャワー": {"スペシャルウィーク": 9, "サイレンススズカ": 5, "トウカイテイオー": 13, "マルゼンスキー": 6, "オグリキャップ": 4, "ダイワスカーレット": 8, "タイキシャトル": 8, "メジロマックイーン": 16, "エルコンドルパサー": 14, "シンボリルドルフ": 17, "エアグルーヴ": 8, "ライスシャワー": 0, "ゴールドシップ": 11, "ウォッカ": 3, "グラスワンダー": 6, "マヤノトップガン": 12, "メジロライアン": 6, "アグネスタキオン": 6, "ウィニングチケット": 4, "サクラバクシンオー": 7, "スーパークリーク": 15, "ハルウララ": 1, "マチカネフクキタル": 6, "ナイスネイチャ": 10, "キングヘイロー": 2}, "ゴールドシップ": {"スペシャルウィーク": 12, "サイレンススズカ": 8, "トウカイテイオー": 8, "マルゼンスキー": 5, "オグリキャップ": 9, "ダイワスカーレット": 6, "タイキシャトル": 2, "メジロマックイーン": 15, "エルコンドルパサー": 5, "シンボリルドルフ": 11, "エアグルーヴ": 7, "ライスシャワー": 10, "ゴールドシップ": 0, "ウォッカ": 5, "グラスワンダー": 5, "マヤノトップガン": 14, "メジロライアン": 7, "アグネスタキオン": 7, "ウィニングチケット": 10, "サクラバクシンオー": 3, "スーパークリーク": 13, "ハルウララ": 1, "マチカネフクキタル": 8, "ナイスネイチャ": 12, "キングヘイロー": 4}, "ウォッカ": {"スペシャルウィーク": 12, "サイレンススズカ": 4, "トウカイテイオー": 11, "マルゼンスキー": 7, "オグリキャップ": 15, "ダイワスカーレット": 16, "タイキシャトル": 8, "メジロマックイーン": 7, "エルコンドルパサー": 13, "シンボリルドルフ": 4, "エアグルーヴ": 8, "ライスシャワー": 3, "ゴールドシップ": 4, "ウォッカ": 0, "グラスワンダー": 14, "マヤノトップガン": 4, "メジロライアン": 7, "アグネスタキオン": 12, "ウィニングチケット": 10, "サクラバクシンオー": 2, "スーパークリーク": 5, "ハルウララ": 1, "マチカネフクキタル": 9, "ナイスネイチャ": 10, "キングヘイロー": 6}, "グラスワンダー": {"スペシャルウィーク": 16, "サイレンススズカ": 6, "トウカイテイオー": 6, "マルゼンスキー": 13, "オグリキャップ": 18, "ダイワスカーレット": 15, "タイキシャトル": 14, "メジロマックイーン": 4, "エルコンドルパサー": 19, "シンボリルドルフ": 8, "エアグルーヴ": 4, "ライスシャワー": 7, "ゴールドシップ": 5, "ウォッカ": 17, "グラスワンダー": 0, "マヤノトップガン": 6, "メジロライアン": 12, "アグネスタキオン": 11, "ウィニングチケット": 9, "サクラバクシンオー": 2, "スーパークリーク": 3, "ハルウララ": 1, "マチカネフクキタル": 10, "ナイスネイチャ": 13, "キングヘイロー": 13}, "マヤノトップガン": {"スペシャルウィーク": 14, "サイレンススズカ": 18, "トウカイテイオー": 9, "マルゼンスキー": 10, "オグリキャップ": 10, "ダイワスカーレット": 7, "タイキシャトル": 2, "メジロマックイーン": 16, "エルコンドルパサー": 5, "シンボリルドルフ": 12, "エアグルーヴ": 6, "ライスシャワー": 11, "ゴールドシップ": 17, "ウォッカ": 6, "グラスワンダー": 7, "マヤノトップガン": 0, "メジロライアン": 7, "アグネスタキオン": 8, "ウィニングチケット": 10, "サクラバクシンオー": 3, "スーパークリーク": 15, "ハルウララ": 1, "マチカネフクキタル": 9, "ナイスネイチャ": 13, "キングヘイロー": 4}, "メジロライアン": {"スペシャルウィーク": 13, "サイレンススズカ": 8, "トウカイテイオー": 6, "マルゼンスキー": 5, "オグリキャップ": 15, "ダイワスカーレット": 3, "タイキシャトル": 2, "メジロマックイーン": 11, "エルコンドルパサー": 6, "シンボリルドルフ": 6, "エアグルーヴ": 5, "ライスシャワー": 8, "ゴールドシップ": 9, "ウォッカ": 10, "グラスワンダー": 14, "マヤノトップガン": 7, "メジロライアン": 0, "アグネスタキオン": 12, "ウィニングチケット": 15, "サクラバクシンオー": 4, "スーパークリーク": 6, "ハルウララ": 1, "マチカネフクキタル": 12, "ナイスネイチャ": 15, "キングヘイロー": 5}, "アグネスタキオン": {"スペシャルウィーク": 11, "サイレンススズカ": 8, "トウカイテイオー": 9, "マルゼンスキー": 5, "オグリキャップ": 10, "ダイワスカーレット": 5, "タイキシャトル": 3, "メジロマックイーン": 7, "エルコンドルパサー": 4, "シンボリルドルフ": 5, "エアグルーヴ": 6, "ライスシャワー": 5, "ゴールドシップ": 6, "ウォッカ": 11, "グラスワンダー": 9, "マヤノトップガン": 5, "メジロライアン": 9, "アグネスタキオン": 0, "ウィニングチケット": 10, "サクラバクシンオー": 2, "スーパークリーク": 6, "ハルウララ": 1, "マチカネフクキタル": 13, "ナイスネイチャ": 12, "キングヘイロー": 8}, "ウィニングチケット": {"スペシャルウィーク": 15, "サイレンススズカ": 8, "トウカイテイオー": 8, "マルゼンスキー": 5, "オグリキャップ": 14, "ダイワスカーレット": 5, "タイキシャトル": 2, "メジロマックイーン": 9, "エルコンドルパサー": 4, "シンボリルドルフ": 5, "エアグルーヴ": 7, "ライスシャワー": 4, "ゴールドシップ": 11, "ウォッカ": 11, "グラスワンダー": 9, "マヤノトップガン": 10, "メジロライアン": 12, "アグネスタキオン": 12, "ウィニングチケット": 0, "サクラバクシンオー": 3, "スーパークリーク": 9, "ハルウララ": 1, "マチカネフクキタル": 13, "ナイスネイチャ": 13, "キングヘイロー": 6}, "サクラバクシンオー": {"スペシャルウィーク": 2, "サイレンススズカ": 5, "トウカイテイオー": 8, "マルゼンスキー": 12, "オグリキャップ": 2, "ダイワスカーレット": 5, "タイキシャトル": 13, "メジロマックイーン": 10, "エルコンドルパサー": 8, "シンボリルドルフ": 8, "エアグルーヴ": 7, "ライスシャワー": 11, "ゴールドシップ": 2, "ウォッカ": 1, "グラスワンダー": 2, "マヤノトップガン": 2, "メジロライアン": 6, "アグネスタキオン": 3, "ウィニングチケット": 3, "サクラバクシンオー": 0, "スーパークリーク": 9, "ハルウララ": 2, "マチカネフクキタル": 5, "ナイスネイチャ": 4, "キングヘイロー": 11}, "スーパークリーク": {"スペシャルウィーク": 19, "サイレンススズカ": 11, "トウカイテイオー": 13, "マルゼンスキー": 7, "オグリキャップ": 17, "ダイワスカーレット": 14, "タイキシャトル": 4, "メジロマックイーン": 21, "エルコンドルパサー": 10, "シンボリルドルフ": 20, "エアグルーヴ": 13, "ライスシャワー": 18, "ゴールドシップ": 17, "ウォッカ": 6, "グラスワンダー": 3, "マヤノトップガン": 16, "メジロライアン": 5, "アグネスタキオン": 8, "ウィニングチケット": 9, "サクラバクシンオー": 6, "スーパークリーク": 0, "ハルウララ": 1, "マチカネフクキタル": 12, "ナイスネイチャ": 15, "キングヘイロー": 2}, "ハルウララ": {"スペシャルウィーク": 6, "サイレンススズカ": 3, "トウカイテイオー": 3, "マルゼンスキー": 8, "オグリキャップ": 3, "ダイワスカーレット": 4, "タイキシャトル": 8, "メジロマックイーン": 4, "エルコンドルパサー": 2, "シンボリルドルフ": 1, "エアグルーヴ": 3, "ライスシャワー": 2, "ゴールドシップ": 7, "ウォッカ": 3, "グラスワンダー": 3, "マヤノトップガン": 3, "メジロライアン": 1, "アグネスタキオン": 3, "ウィニングチケット": 3, "サクラバクシンオー": 9, "スーパークリーク": 3, "ハルウララ": 0, "マチカネフクキタル": 3, "ナイスネイチャ": 5, "キングヘイロー": 10}, "マチカネフクキタル": {"スペシャルウィーク": 16, "サイレンススズカ": 15, "トウカイテイオー": 6, "マルゼンスキー": 5, "オグリキャップ": 13, "ダイワスカーレット": 7, "タイキシャトル": 3, "メジロマックイーン": 9, "エルコンドルパサー": 4, "シンボリルドルフ": 4, "エアグルーヴ": 5, "ライスシャワー": 8, "ゴールドシップ": 9, "ウォッカ": 11, "グラスワンダー": 10, "マヤノトップガン": 9, "メジロライアン": 11, "アグネスタキオン": 14, "ウィニングチケット": 13, "サクラバクシンオー": 2, "スーパークリーク": 12, "ハルウララ": 1, "マチカネフクキタル": 0, "ナイスネイチャ": 13, "キングヘイロー": 8}, "ナイスネイチャ": {"スペシャルウィーク": 16, "サイレンススズカ": 8, "トウカイテイオー": 9, "マルゼンスキー": 4, "オグリキャップ": 14, "ダイワスカーレット": 5, "タイキシャトル": 2, "メジロマックイーン": 15, "エルコンドルパサー": 7, "シンボリルドルフ": 8, "エアグルーヴ": 6, "ライスシャワー": 10, "ゴールドシップ": 14, "ウォッカ": 11, "グラスワンダー": 12, "マヤノトップガン": 13, "メジロライアン": 12, "アグネスタキオン": 13, "ウィニングチケット": 13, "サクラバクシンオー": 3, "スーパークリーク": 13, "ハルウララ": 1, "マチカネフクキタル": 13, "ナイスネイチャ": 0, "キングヘイロー": 10}, "キングヘイロー": {"スペシャルウィーク": 14, "サイレンススズカ": 5, "トウカイテイオー": 7, "マルゼンスキー": 7, "オグリキャップ": 9, "ダイワスカーレット": 5, "タイキシャトル": 16, "メジロマックイーン": 7, "エルコンドルパサー": 8, "シンボリルドルフ": 3, "エアグルーヴ": 6, "ライスシャワー": 2, "ゴールドシップ": 5, "ウォッカ": 10, "グラスワンダー": 13, "マヤノトップガン": 4, "メジロライアン": 7, "アグネスタキオン": 11, "ウィニングチケット": 9, "サクラバクシンオー": 15, "スーパークリーク": 4, "ハルウララ": 1, "マチカネフクキタル": 10, "ナイスネイチャ": 12, "キングヘイロー": 0}}
const uma = ['スペシャルウィーク', 'サイレンススズカ', 'トウカイテイオー', 'マルゼンスキー', 'オグリキャップ', 'ダイワスカーレット', 'タイキシャトル', 'メジロマックイーン', 'エルコンドルパサー', 'シンボリルドルフ', 'エアグルーヴ', 'ライスシャワー', 'ゴールドシップ', 'ウォッカ', 'グラスワンダー', 'マヤノトップガン', 'メジロライアン', 'アグネスタキオン', 'ウィニングチケット', 'サクラバクシンオー', 'スーパークリーク', 'ハルウララ', 'マチカネフクキタル', 'ナイスネイチャ', 'キングヘイロー']
class UmaMusu extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange_ME = this.handleChange_ME.bind(this);
    this.handleChange_POINT = this.handleChange_POINT.bind(this);

    this.handleChange_MO = this.handleChange_MO.bind(this);
    this.handleChange_gmMO = this.handleChange_gmMO.bind(this);
    this.handleChange_gmFA = this.handleChange_gmFA.bind(this);
    this.handleChange_mPOINT = this.handleChange_mPOINT.bind(this);

    this.handleChange_FA = this.handleChange_FA.bind(this);
    this.handleChange_gfMO = this.handleChange_gfMO.bind(this);
    this.handleChange_gfFA = this.handleChange_gfFA.bind(this);
    this.handleChange_fPOINT = this.handleChange_fPOINT.bind(this);
    this.state = {
      ME: 'スペシャルウィーク',
      POINT: 2,

      MO: 'スペシャルウィーク',
      gmMO: 'スペシャルウィーク',
      gmFA: 'スペシャルウィーク',
      mPOINT: 2,

      FA: 'スペシャルウィーク',
      gfMO: 'スペシャルウィーク',
      gfFA: 'スペシャルウィーク',
      fPOINT: 2,
      result: 0
    };
  }

  handleChange_ME(event) {
    this.setState({ME: event.target.value});
    this.setState({ME: event.target.value});
    let point = compute_lineage(this.state);
    this.setState({result: point});
  }
  handleChange_POINT(event) {
    this.setState({POINT: Number(event.target.value)});
    let point = compute_lineage(this.state);
    this.setState({result: point});
  }

  handleChange_MO(event) {
    this.setState({MO: event.target.value});
    let point = compute_lineage(this.state);
    this.setState({result: point});
  }
  handleChange_gmMO(event) {
    this.setState({gmMO: event.target.value});
    let point = compute_lineage(this.state);
    this.setState({result: point});
  }
  handleChange_gmFA(event) {
    this.setState({gmFA: event.target.value});
    let point = compute_lineage(this.state);
    this.setState({result: point});
  }
  handleChange_mPOINT(event) {
    this.setState({mPOINT: Number(event.target.value)});
    let point = compute_lineage(this.state);
    this.setState({result: point});
  }

  handleChange_FA(event) {
    this.setState({FA: event.target.value});
    let point = compute_lineage(this.state);
    this.setState({result: point});
  }
  handleChange_gfMO(event) {
    this.setState({gfMO: event.target.value});
    let point = compute_lineage(this.state);
    this.setState({result: point});
  }
  handleChange_gfFA(event) {
    this.setState({gfFA: event.target.value});
    let point = compute_lineage(this.state);
    this.setState({result: point});
  }
  handleChange_fPOINT(event) {
    this.setState({fPOINT: Number(event.target.value)});
    let point = compute_lineage(this.state);
    this.setState({result: point});
  }
  render() {
    return (
    <>
    <div>育成ウマ娘相性チェッカー</div>
    
      <form onChange={this.handleChange_form}>
        <div>
          <label>育成ウマ娘</label>
          <select id="ME" onChange={this.handleChange_ME}>{uma.map((d, i) => (<option className="down" value={d} key={i}>{d}</option>))}</select>
          <label>因子数</label>
          <input id="POINT" value={this.state.POINT} type="text" onChange={this.handleChange_POINT}></input>
        </div>
        
        <div>
          <label>母ウマ娘</label>
          <select id="MO" onChange={this.handleChange_MO}>{uma.map((d, i) => (<option value={d} key={i}>{d}</option>))}</select>
          <label>祖母ウマ娘</label>
          <select id="gmMO" onChange={this.handleChange_gmMO}>{uma.map((d, i) => (<option value={d} key={i}>{d}</option>))}</select>
          <label>祖父ウマ娘</label>
          <select id="gmFA" onChange={this.handleChange_gmFA}>{uma.map((d, i) => (<option value={d} key={i}>{d}</option>))}</select>
          <label>母ウマ娘の因子数</label>
          <input id="mPOINT" value={this.state.mPOINT} type="text" onChange={this.handleChange_mPOINT}></input>
        </div>
        
        <div>
          <label>父ウマ娘</label>
          <select id="FA" onChange={this.handleChange_FA}>{uma.map((d, i) => (<><option value={d} key={i}>{d}</option></>))}</select>
          <label>祖母ウマ娘</label>
          <select  id="gfMO" onChange={this.handleChange_gfMO}>{uma.map((d, i) => (<option value={d} key={i}>{d}</option>))}</select>
          <label>祖父ウマ娘</label>
          <select id="gfFA" onChange={this.handleChange_gfFA}>{uma.map((d, i) => (<option value={d} key={i}>{d}</option>))}</select>
          <label>父ウマ娘の因子数</label>
          <input id="fPOINT" value={this.state.fPOINT} type="text" onChange={this.handleChange_fPOINT}></input>
        </div>
      </form>
    <div>
      <label>
        相性：<p id="result"></p>
      </label>
    </div>
    </>
    );
  }
}

// 
export default UmaMusu;


function compute_lineage(state){
  let lineage = {
    "mother":{
        "name": document.getElementById("MO").value,
        "mother": {"name": document.getElementById("gmMO").value},
        "father": {"name": document.getElementById("gmFA").value},
        "lineage_point": 0,
        "factor_point": Number(document.getElementById("mPOINT").value)
    },
    "father":{
        "name": document.getElementById("FA").value,
        "mother": {"name": document.getElementById("gfMO").value},
        "father": {"name": document.getElementById("gfFA").value},
        "lineage_point": 0,
        "factor_point":  Number(document.getElementById("fPOINT").value)
    },
    "name": document.getElementById("ME").value,
    "lineage_point": 0,
    "factor_point":  Number(document.getElementById("POINT").value)
  }
lineage["mother"]["lineage_point"] = uma_data[lineage["mother"]["name"]][lineage["mother"]["mother"]["name"]] * uma_data[lineage["mother"]["name"]][lineage["mother"]["father"]["name"]]
lineage["father"]["lineage_point"] = uma_data[lineage["father"]["name"]][lineage["father"]["mother"]["name"]] * uma_data[lineage["father"]["name"]][lineage["father"]["father"]["name"]]
lineage["lineage_point"] = uma_data[lineage["name"]][lineage["mother"]["name"]] * uma_data[lineage["name"]][lineage["father"]["name"]]
let tortal_lineage_point = lineage["mother"]["lineage_point"] * lineage["father"]["lineage_point"] * lineage["lineage_point"] * uma_data[lineage["mother"]["name"]][lineage["father"]["name"]]
let tortal_factor_point = lineage["mother"]["factor_point"] + lineage["father"]["factor_point"] + lineage["factor_point"]
document.getElementById("result").innerHTML=tortal_lineage_point + tortal_factor_point
return tortal_lineage_point + tortal_factor_point
}