// Generated from Protobuf3.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Protobuf3Listener } from "./Protobuf3Listener";
import { Protobuf3Visitor } from "./Protobuf3Visitor";


export class Protobuf3Parser extends Parser {
	public static readonly SYNTAX = 1;
	public static readonly IMPORT = 2;
	public static readonly WEAK = 3;
	public static readonly PUBLIC = 4;
	public static readonly PACKAGE = 5;
	public static readonly OPTION = 6;
	public static readonly REPEATED = 7;
	public static readonly ONEOF = 8;
	public static readonly MAP = 9;
	public static readonly INT32 = 10;
	public static readonly INT64 = 11;
	public static readonly UINT32 = 12;
	public static readonly UINT64 = 13;
	public static readonly SINT32 = 14;
	public static readonly SINT64 = 15;
	public static readonly FIXED32 = 16;
	public static readonly FIXED64 = 17;
	public static readonly SFIXED32 = 18;
	public static readonly SFIXED64 = 19;
	public static readonly BOOL = 20;
	public static readonly STRING = 21;
	public static readonly DOUBLE = 22;
	public static readonly FLOAT = 23;
	public static readonly BYTES = 24;
	public static readonly RESERVED = 25;
	public static readonly TO = 26;
	public static readonly MAX = 27;
	public static readonly ENUM = 28;
	public static readonly MESSAGE = 29;
	public static readonly SERVICE = 30;
	public static readonly RPC = 31;
	public static readonly STREAM = 32;
	public static readonly RETURNS = 33;
	public static readonly PROTO3_LIT_SINGLE = 34;
	public static readonly PROTO3_LIT_DOBULE = 35;
	public static readonly SEMI = 36;
	public static readonly EQ = 37;
	public static readonly LP = 38;
	public static readonly RP = 39;
	public static readonly LB = 40;
	public static readonly RB = 41;
	public static readonly LC = 42;
	public static readonly RC = 43;
	public static readonly LT = 44;
	public static readonly GT = 45;
	public static readonly DOT = 46;
	public static readonly COMMA = 47;
	public static readonly COLON = 48;
	public static readonly PLUS = 49;
	public static readonly MINUS = 50;
	public static readonly STR_LIT = 51;
	public static readonly BOOL_LIT = 52;
	public static readonly FLOAT_LIT = 53;
	public static readonly INT_LIT = 54;
	public static readonly IDENTIFIER = 55;
	public static readonly WS = 56;
	public static readonly LINE_COMMENT = 57;
	public static readonly COMMENT = 58;
	public static readonly RULE_proto = 0;
	public static readonly RULE_syntax = 1;
	public static readonly RULE_importStatement = 2;
	public static readonly RULE_packageStatement = 3;
	public static readonly RULE_optionStatement = 4;
	public static readonly RULE_optionName = 5;
	public static readonly RULE_field = 6;
	public static readonly RULE_fieldOptions = 7;
	public static readonly RULE_fieldOption = 8;
	public static readonly RULE_fieldNumber = 9;
	public static readonly RULE_oneof = 10;
	public static readonly RULE_oneofField = 11;
	public static readonly RULE_mapField = 12;
	public static readonly RULE_keyType = 13;
	public static readonly RULE_type_ = 14;
	public static readonly RULE_reserved = 15;
	public static readonly RULE_ranges = 16;
	public static readonly RULE_range_ = 17;
	public static readonly RULE_reservedFieldNames = 18;
	public static readonly RULE_topLevelDef = 19;
	public static readonly RULE_enumDef = 20;
	public static readonly RULE_enumBody = 21;
	public static readonly RULE_enumElement = 22;
	public static readonly RULE_enumField = 23;
	public static readonly RULE_enumValueOptions = 24;
	public static readonly RULE_enumValueOption = 25;
	public static readonly RULE_messageDef = 26;
	public static readonly RULE_messageBody = 27;
	public static readonly RULE_messageElement = 28;
	public static readonly RULE_serviceDef = 29;
	public static readonly RULE_serviceElement = 30;
	public static readonly RULE_rpc = 31;
	public static readonly RULE_constant = 32;
	public static readonly RULE_blockLit = 33;
	public static readonly RULE_emptyStatement = 34;
	public static readonly RULE_ident = 35;
	public static readonly RULE_fullIdent = 36;
	public static readonly RULE_messageName = 37;
	public static readonly RULE_enumName = 38;
	public static readonly RULE_fieldName = 39;
	public static readonly RULE_oneofName = 40;
	public static readonly RULE_mapName = 41;
	public static readonly RULE_serviceName = 42;
	public static readonly RULE_rpcName = 43;
	public static readonly RULE_messageType = 44;
	public static readonly RULE_enumType = 45;
	public static readonly RULE_intLit = 46;
	public static readonly RULE_strLit = 47;
	public static readonly RULE_boolLit = 48;
	public static readonly RULE_floatLit = 49;
	public static readonly RULE_keywords = 50;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"proto", "syntax", "importStatement", "packageStatement", "optionStatement", 
		"optionName", "field", "fieldOptions", "fieldOption", "fieldNumber", "oneof", 
		"oneofField", "mapField", "keyType", "type_", "reserved", "ranges", "range_", 
		"reservedFieldNames", "topLevelDef", "enumDef", "enumBody", "enumElement", 
		"enumField", "enumValueOptions", "enumValueOption", "messageDef", "messageBody", 
		"messageElement", "serviceDef", "serviceElement", "rpc", "constant", "blockLit", 
		"emptyStatement", "ident", "fullIdent", "messageName", "enumName", "fieldName", 
		"oneofName", "mapName", "serviceName", "rpcName", "messageType", "enumType", 
		"intLit", "strLit", "boolLit", "floatLit", "keywords",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'syntax'", "'import'", "'weak'", "'public'", "'package'", 
		"'option'", "'repeated'", "'oneof'", "'map'", "'int32'", "'int64'", "'uint32'", 
		"'uint64'", "'sint32'", "'sint64'", "'fixed32'", "'fixed64'", "'sfixed32'", 
		"'sfixed64'", "'bool'", "'string'", "'double'", "'float'", "'bytes'", 
		"'reserved'", "'to'", "'max'", "'enum'", "'message'", "'service'", "'rpc'", 
		"'stream'", "'returns'", "'\"proto3\"'", "''roto3''", "';'", "'='", "'('", 
		"')'", "'['", "']'", "'{'", "'}'", "'<'", "'>'", "'.'", "','", "':'", 
		"'+'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SYNTAX", "IMPORT", "WEAK", "PUBLIC", "PACKAGE", "OPTION", 
		"REPEATED", "ONEOF", "MAP", "INT32", "INT64", "UINT32", "UINT64", "SINT32", 
		"SINT64", "FIXED32", "FIXED64", "SFIXED32", "SFIXED64", "BOOL", "STRING", 
		"DOUBLE", "FLOAT", "BYTES", "RESERVED", "TO", "MAX", "ENUM", "MESSAGE", 
		"SERVICE", "RPC", "STREAM", "RETURNS", "PROTO3_LIT_SINGLE", "PROTO3_LIT_DOBULE", 
		"SEMI", "EQ", "LP", "RP", "LB", "RB", "LC", "RC", "LT", "GT", "DOT", "COMMA", 
		"COLON", "PLUS", "MINUS", "STR_LIT", "BOOL_LIT", "FLOAT_LIT", "INT_LIT", 
		"IDENTIFIER", "WS", "LINE_COMMENT", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Protobuf3Parser._LITERAL_NAMES, Protobuf3Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Protobuf3Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Protobuf3.g4"; }

	// @Override
	public get ruleNames(): string[] { return Protobuf3Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Protobuf3Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Protobuf3Parser._ATN, this);
	}
	// @RuleVersion(0)
	public proto(): ProtoContext {
		let _localctx: ProtoContext = new ProtoContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Protobuf3Parser.RULE_proto);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.syntax();
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE))) !== 0) || _la === Protobuf3Parser.SEMI) {
				{
				this.state = 108;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Protobuf3Parser.IMPORT:
					{
					this.state = 103;
					this.importStatement();
					}
					break;
				case Protobuf3Parser.PACKAGE:
					{
					this.state = 104;
					this.packageStatement();
					}
					break;
				case Protobuf3Parser.OPTION:
					{
					this.state = 105;
					this.optionStatement();
					}
					break;
				case Protobuf3Parser.ENUM:
				case Protobuf3Parser.MESSAGE:
				case Protobuf3Parser.SERVICE:
					{
					this.state = 106;
					this.topLevelDef();
					}
					break;
				case Protobuf3Parser.SEMI:
					{
					this.state = 107;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public syntax(): SyntaxContext {
		let _localctx: SyntaxContext = new SyntaxContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Protobuf3Parser.RULE_syntax);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(Protobuf3Parser.SYNTAX);
			this.state = 114;
			this.match(Protobuf3Parser.EQ);
			this.state = 115;
			_la = this._input.LA(1);
			if (!(_la === Protobuf3Parser.PROTO3_LIT_SINGLE || _la === Protobuf3Parser.PROTO3_LIT_DOBULE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 116;
			this.match(Protobuf3Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Protobuf3Parser.RULE_importStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(Protobuf3Parser.IMPORT);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.WEAK || _la === Protobuf3Parser.PUBLIC) {
				{
				this.state = 119;
				_la = this._input.LA(1);
				if (!(_la === Protobuf3Parser.WEAK || _la === Protobuf3Parser.PUBLIC)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 122;
			this.strLit();
			this.state = 123;
			this.match(Protobuf3Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageStatement(): PackageStatementContext {
		let _localctx: PackageStatementContext = new PackageStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Protobuf3Parser.RULE_packageStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(Protobuf3Parser.PACKAGE);
			this.state = 126;
			this.fullIdent();
			this.state = 127;
			this.match(Protobuf3Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionStatement(): OptionStatementContext {
		let _localctx: OptionStatementContext = new OptionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Protobuf3Parser.RULE_optionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(Protobuf3Parser.OPTION);
			this.state = 130;
			this.optionName();
			this.state = 131;
			this.match(Protobuf3Parser.EQ);
			this.state = 132;
			this.constant();
			this.state = 133;
			this.match(Protobuf3Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionName(): OptionNameContext {
		let _localctx: OptionNameContext = new OptionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Protobuf3Parser.RULE_optionName);
		let _la: number;
		try {
			this.state = 143;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Protobuf3Parser.SYNTAX:
			case Protobuf3Parser.IMPORT:
			case Protobuf3Parser.WEAK:
			case Protobuf3Parser.PUBLIC:
			case Protobuf3Parser.PACKAGE:
			case Protobuf3Parser.OPTION:
			case Protobuf3Parser.REPEATED:
			case Protobuf3Parser.ONEOF:
			case Protobuf3Parser.MAP:
			case Protobuf3Parser.INT32:
			case Protobuf3Parser.INT64:
			case Protobuf3Parser.UINT32:
			case Protobuf3Parser.UINT64:
			case Protobuf3Parser.SINT32:
			case Protobuf3Parser.SINT64:
			case Protobuf3Parser.FIXED32:
			case Protobuf3Parser.FIXED64:
			case Protobuf3Parser.SFIXED32:
			case Protobuf3Parser.SFIXED64:
			case Protobuf3Parser.BOOL:
			case Protobuf3Parser.STRING:
			case Protobuf3Parser.DOUBLE:
			case Protobuf3Parser.FLOAT:
			case Protobuf3Parser.BYTES:
			case Protobuf3Parser.RESERVED:
			case Protobuf3Parser.TO:
			case Protobuf3Parser.MAX:
			case Protobuf3Parser.ENUM:
			case Protobuf3Parser.MESSAGE:
			case Protobuf3Parser.SERVICE:
			case Protobuf3Parser.RPC:
			case Protobuf3Parser.STREAM:
			case Protobuf3Parser.RETURNS:
			case Protobuf3Parser.BOOL_LIT:
			case Protobuf3Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 135;
				this.fullIdent();
				}
				break;
			case Protobuf3Parser.LP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 136;
				this.match(Protobuf3Parser.LP);
				this.state = 137;
				this.fullIdent();
				this.state = 138;
				this.match(Protobuf3Parser.RP);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Protobuf3Parser.DOT) {
					{
					this.state = 139;
					this.match(Protobuf3Parser.DOT);
					this.state = 140;
					this.fullIdent();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Protobuf3Parser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 145;
				this.match(Protobuf3Parser.REPEATED);
				}
				break;
			}
			this.state = 148;
			this.type_();
			this.state = 149;
			this.fieldName();
			this.state = 150;
			this.match(Protobuf3Parser.EQ);
			this.state = 151;
			this.fieldNumber();
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.LB) {
				{
				this.state = 152;
				this.match(Protobuf3Parser.LB);
				this.state = 153;
				this.fieldOptions();
				this.state = 154;
				this.match(Protobuf3Parser.RB);
				}
			}

			this.state = 158;
			this.match(Protobuf3Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldOptions(): FieldOptionsContext {
		let _localctx: FieldOptionsContext = new FieldOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Protobuf3Parser.RULE_fieldOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.fieldOption();
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Protobuf3Parser.COMMA) {
				{
				{
				this.state = 161;
				this.match(Protobuf3Parser.COMMA);
				this.state = 162;
				this.fieldOption();
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldOption(): FieldOptionContext {
		let _localctx: FieldOptionContext = new FieldOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Protobuf3Parser.RULE_fieldOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.optionName();
			this.state = 169;
			this.match(Protobuf3Parser.EQ);
			this.state = 170;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldNumber(): FieldNumberContext {
		let _localctx: FieldNumberContext = new FieldNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Protobuf3Parser.RULE_fieldNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.intLit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oneof(): OneofContext {
		let _localctx: OneofContext = new OneofContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Protobuf3Parser.RULE_oneof);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(Protobuf3Parser.ONEOF);
			this.state = 175;
			this.oneofName();
			this.state = 176;
			this.match(Protobuf3Parser.LC);
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.SEMI - 32)) | (1 << (Protobuf3Parser.DOT - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)) | (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !== 0)) {
				{
				this.state = 180;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 177;
					this.optionStatement();
					}
					break;

				case 2:
					{
					this.state = 178;
					this.oneofField();
					}
					break;

				case 3:
					{
					this.state = 179;
					this.emptyStatement();
					}
					break;
				}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 185;
			this.match(Protobuf3Parser.RC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oneofField(): OneofFieldContext {
		let _localctx: OneofFieldContext = new OneofFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Protobuf3Parser.RULE_oneofField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.type_();
			this.state = 188;
			this.fieldName();
			this.state = 189;
			this.match(Protobuf3Parser.EQ);
			this.state = 190;
			this.fieldNumber();
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.LB) {
				{
				this.state = 191;
				this.match(Protobuf3Parser.LB);
				this.state = 192;
				this.fieldOptions();
				this.state = 193;
				this.match(Protobuf3Parser.RB);
				}
			}

			this.state = 197;
			this.match(Protobuf3Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapField(): MapFieldContext {
		let _localctx: MapFieldContext = new MapFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Protobuf3Parser.RULE_mapField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(Protobuf3Parser.MAP);
			this.state = 200;
			this.match(Protobuf3Parser.LT);
			this.state = 201;
			this.keyType();
			this.state = 202;
			this.match(Protobuf3Parser.COMMA);
			this.state = 203;
			this.type_();
			this.state = 204;
			this.match(Protobuf3Parser.GT);
			this.state = 205;
			this.mapName();
			this.state = 206;
			this.match(Protobuf3Parser.EQ);
			this.state = 207;
			this.fieldNumber();
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.LB) {
				{
				this.state = 208;
				this.match(Protobuf3Parser.LB);
				this.state = 209;
				this.fieldOptions();
				this.state = 210;
				this.match(Protobuf3Parser.RB);
				}
			}

			this.state = 214;
			this.match(Protobuf3Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyType(): KeyTypeContext {
		let _localctx: KeyTypeContext = new KeyTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Protobuf3Parser.RULE_keyType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 28, Protobuf3Parser.RULE_type_);
		try {
			this.state = 235;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 218;
				this.match(Protobuf3Parser.DOUBLE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 219;
				this.match(Protobuf3Parser.FLOAT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 220;
				this.match(Protobuf3Parser.INT32);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 221;
				this.match(Protobuf3Parser.INT64);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 222;
				this.match(Protobuf3Parser.UINT32);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 223;
				this.match(Protobuf3Parser.UINT64);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 224;
				this.match(Protobuf3Parser.SINT32);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 225;
				this.match(Protobuf3Parser.SINT64);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 226;
				this.match(Protobuf3Parser.FIXED32);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 227;
				this.match(Protobuf3Parser.FIXED64);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 228;
				this.match(Protobuf3Parser.SFIXED32);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 229;
				this.match(Protobuf3Parser.SFIXED64);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 230;
				this.match(Protobuf3Parser.BOOL);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 231;
				this.match(Protobuf3Parser.STRING);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 232;
				this.match(Protobuf3Parser.BYTES);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 233;
				this.messageType();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 234;
				this.enumType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reserved(): ReservedContext {
		let _localctx: ReservedContext = new ReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Protobuf3Parser.RULE_reserved);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.match(Protobuf3Parser.RESERVED);
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Protobuf3Parser.INT_LIT:
				{
				this.state = 238;
				this.ranges();
				}
				break;
			case Protobuf3Parser.PROTO3_LIT_SINGLE:
			case Protobuf3Parser.PROTO3_LIT_DOBULE:
			case Protobuf3Parser.STR_LIT:
				{
				this.state = 239;
				this.reservedFieldNames();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 242;
			this.match(Protobuf3Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ranges(): RangesContext {
		let _localctx: RangesContext = new RangesContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Protobuf3Parser.RULE_ranges);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.range_();
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Protobuf3Parser.COMMA) {
				{
				{
				this.state = 245;
				this.match(Protobuf3Parser.COMMA);
				this.state = 246;
				this.range_();
				}
				}
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public range_(): Range_Context {
		let _localctx: Range_Context = new Range_Context(this._ctx, this.state);
		this.enterRule(_localctx, 34, Protobuf3Parser.RULE_range_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.intLit();
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.TO) {
				{
				this.state = 253;
				this.match(Protobuf3Parser.TO);
				this.state = 256;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Protobuf3Parser.INT_LIT:
					{
					this.state = 254;
					this.intLit();
					}
					break;
				case Protobuf3Parser.MAX:
					{
					this.state = 255;
					this.match(Protobuf3Parser.MAX);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedFieldNames(): ReservedFieldNamesContext {
		let _localctx: ReservedFieldNamesContext = new ReservedFieldNamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Protobuf3Parser.RULE_reservedFieldNames);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.strLit();
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Protobuf3Parser.COMMA) {
				{
				{
				this.state = 261;
				this.match(Protobuf3Parser.COMMA);
				this.state = 262;
				this.strLit();
				}
				}
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topLevelDef(): TopLevelDefContext {
		let _localctx: TopLevelDefContext = new TopLevelDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Protobuf3Parser.RULE_topLevelDef);
		try {
			this.state = 271;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Protobuf3Parser.MESSAGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 268;
				this.messageDef();
				}
				break;
			case Protobuf3Parser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 269;
				this.enumDef();
				}
				break;
			case Protobuf3Parser.SERVICE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 270;
				this.serviceDef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDef(): EnumDefContext {
		let _localctx: EnumDefContext = new EnumDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Protobuf3Parser.RULE_enumDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.match(Protobuf3Parser.ENUM);
			this.state = 274;
			this.enumName();
			this.state = 275;
			this.enumBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let _localctx: EnumBodyContext = new EnumBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Protobuf3Parser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.match(Protobuf3Parser.LC);
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.SEMI - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)) | (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !== 0)) {
				{
				{
				this.state = 278;
				this.enumElement();
				}
				}
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 284;
			this.match(Protobuf3Parser.RC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumElement(): EnumElementContext {
		let _localctx: EnumElementContext = new EnumElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Protobuf3Parser.RULE_enumElement);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 286;
				this.optionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 287;
				this.enumField();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 288;
				this.emptyStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumField(): EnumFieldContext {
		let _localctx: EnumFieldContext = new EnumFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Protobuf3Parser.RULE_enumField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.ident();
			this.state = 292;
			this.match(Protobuf3Parser.EQ);
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.MINUS) {
				{
				this.state = 293;
				this.match(Protobuf3Parser.MINUS);
				}
			}

			this.state = 296;
			this.intLit();
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.LB) {
				{
				this.state = 297;
				this.enumValueOptions();
				}
			}

			this.state = 300;
			this.match(Protobuf3Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumValueOptions(): EnumValueOptionsContext {
		let _localctx: EnumValueOptionsContext = new EnumValueOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Protobuf3Parser.RULE_enumValueOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this.match(Protobuf3Parser.LB);
			this.state = 303;
			this.enumValueOption();
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Protobuf3Parser.COMMA) {
				{
				{
				this.state = 304;
				this.match(Protobuf3Parser.COMMA);
				this.state = 305;
				this.enumValueOption();
				}
				}
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 311;
			this.match(Protobuf3Parser.RB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumValueOption(): EnumValueOptionContext {
		let _localctx: EnumValueOptionContext = new EnumValueOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Protobuf3Parser.RULE_enumValueOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.optionName();
			this.state = 314;
			this.match(Protobuf3Parser.EQ);
			this.state = 315;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public messageDef(): MessageDefContext {
		let _localctx: MessageDefContext = new MessageDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Protobuf3Parser.RULE_messageDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.match(Protobuf3Parser.MESSAGE);
			this.state = 318;
			this.messageName();
			this.state = 319;
			this.messageBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public messageBody(): MessageBodyContext {
		let _localctx: MessageBodyContext = new MessageBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Protobuf3Parser.RULE_messageBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(Protobuf3Parser.LC);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.SEMI - 32)) | (1 << (Protobuf3Parser.DOT - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)) | (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !== 0)) {
				{
				{
				this.state = 322;
				this.messageElement();
				}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 328;
			this.match(Protobuf3Parser.RC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public messageElement(): MessageElementContext {
		let _localctx: MessageElementContext = new MessageElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Protobuf3Parser.RULE_messageElement);
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 330;
				this.field();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 331;
				this.enumDef();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 332;
				this.messageDef();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 333;
				this.optionStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 334;
				this.oneof();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 335;
				this.mapField();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 336;
				this.reserved();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 337;
				this.emptyStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public serviceDef(): ServiceDefContext {
		let _localctx: ServiceDefContext = new ServiceDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Protobuf3Parser.RULE_serviceDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(Protobuf3Parser.SERVICE);
			this.state = 341;
			this.serviceName();
			this.state = 342;
			this.match(Protobuf3Parser.LC);
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (Protobuf3Parser.OPTION - 6)) | (1 << (Protobuf3Parser.RPC - 6)) | (1 << (Protobuf3Parser.SEMI - 6)))) !== 0)) {
				{
				{
				this.state = 343;
				this.serviceElement();
				}
				}
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 349;
			this.match(Protobuf3Parser.RC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public serviceElement(): ServiceElementContext {
		let _localctx: ServiceElementContext = new ServiceElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Protobuf3Parser.RULE_serviceElement);
		try {
			this.state = 354;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Protobuf3Parser.OPTION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 351;
				this.optionStatement();
				}
				break;
			case Protobuf3Parser.RPC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 352;
				this.rpc();
				}
				break;
			case Protobuf3Parser.SEMI:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 353;
				this.emptyStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rpc(): RpcContext {
		let _localctx: RpcContext = new RpcContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Protobuf3Parser.RULE_rpc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.match(Protobuf3Parser.RPC);
			this.state = 357;
			this.rpcName();
			this.state = 358;
			this.match(Protobuf3Parser.LP);
			this.state = 360;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 359;
				this.match(Protobuf3Parser.STREAM);
				}
				break;
			}
			this.state = 362;
			this.messageType();
			this.state = 363;
			this.match(Protobuf3Parser.RP);
			this.state = 364;
			this.match(Protobuf3Parser.RETURNS);
			this.state = 365;
			this.match(Protobuf3Parser.LP);
			this.state = 367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 366;
				this.match(Protobuf3Parser.STREAM);
				}
				break;
			}
			this.state = 369;
			this.messageType();
			this.state = 370;
			this.match(Protobuf3Parser.RP);
			this.state = 381;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Protobuf3Parser.LC:
				{
				this.state = 371;
				this.match(Protobuf3Parser.LC);
				this.state = 376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Protobuf3Parser.OPTION || _la === Protobuf3Parser.SEMI) {
					{
					this.state = 374;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Protobuf3Parser.OPTION:
						{
						this.state = 372;
						this.optionStatement();
						}
						break;
					case Protobuf3Parser.SEMI:
						{
						this.state = 373;
						this.emptyStatement();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 378;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 379;
				this.match(Protobuf3Parser.RC);
				}
				break;
			case Protobuf3Parser.SEMI:
				{
				this.state = 380;
				this.match(Protobuf3Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Protobuf3Parser.RULE_constant);
		let _la: number;
		try {
			this.state = 395;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 383;
				this.fullIdent();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Protobuf3Parser.PLUS || _la === Protobuf3Parser.MINUS) {
					{
					this.state = 384;
					_la = this._input.LA(1);
					if (!(_la === Protobuf3Parser.PLUS || _la === Protobuf3Parser.MINUS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 387;
				this.intLit();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Protobuf3Parser.PLUS || _la === Protobuf3Parser.MINUS) {
					{
					this.state = 388;
					_la = this._input.LA(1);
					if (!(_la === Protobuf3Parser.PLUS || _la === Protobuf3Parser.MINUS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 391;
				this.floatLit();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 392;
				this.strLit();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 393;
				this.boolLit();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 394;
				this.blockLit();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockLit(): BlockLitContext {
		let _localctx: BlockLitContext = new BlockLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Protobuf3Parser.RULE_blockLit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(Protobuf3Parser.LC);
			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)) | (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !== 0)) {
				{
				{
				this.state = 398;
				this.ident();
				this.state = 399;
				this.match(Protobuf3Parser.COLON);
				this.state = 400;
				this.constant();
				}
				}
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 407;
			this.match(Protobuf3Parser.RC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Protobuf3Parser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.match(Protobuf3Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ident(): IdentContext {
		let _localctx: IdentContext = new IdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Protobuf3Parser.RULE_ident);
		try {
			this.state = 413;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Protobuf3Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 411;
				this.match(Protobuf3Parser.IDENTIFIER);
				}
				break;
			case Protobuf3Parser.SYNTAX:
			case Protobuf3Parser.IMPORT:
			case Protobuf3Parser.WEAK:
			case Protobuf3Parser.PUBLIC:
			case Protobuf3Parser.PACKAGE:
			case Protobuf3Parser.OPTION:
			case Protobuf3Parser.REPEATED:
			case Protobuf3Parser.ONEOF:
			case Protobuf3Parser.MAP:
			case Protobuf3Parser.INT32:
			case Protobuf3Parser.INT64:
			case Protobuf3Parser.UINT32:
			case Protobuf3Parser.UINT64:
			case Protobuf3Parser.SINT32:
			case Protobuf3Parser.SINT64:
			case Protobuf3Parser.FIXED32:
			case Protobuf3Parser.FIXED64:
			case Protobuf3Parser.SFIXED32:
			case Protobuf3Parser.SFIXED64:
			case Protobuf3Parser.BOOL:
			case Protobuf3Parser.STRING:
			case Protobuf3Parser.DOUBLE:
			case Protobuf3Parser.FLOAT:
			case Protobuf3Parser.BYTES:
			case Protobuf3Parser.RESERVED:
			case Protobuf3Parser.TO:
			case Protobuf3Parser.MAX:
			case Protobuf3Parser.ENUM:
			case Protobuf3Parser.MESSAGE:
			case Protobuf3Parser.SERVICE:
			case Protobuf3Parser.RPC:
			case Protobuf3Parser.STREAM:
			case Protobuf3Parser.RETURNS:
			case Protobuf3Parser.BOOL_LIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 412;
				this.keywords();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fullIdent(): FullIdentContext {
		let _localctx: FullIdentContext = new FullIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Protobuf3Parser.RULE_fullIdent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.ident();
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Protobuf3Parser.DOT) {
				{
				{
				this.state = 416;
				this.match(Protobuf3Parser.DOT);
				this.state = 417;
				this.ident();
				}
				}
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public messageName(): MessageNameContext {
		let _localctx: MessageNameContext = new MessageNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Protobuf3Parser.RULE_messageName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumName(): EnumNameContext {
		let _localctx: EnumNameContext = new EnumNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Protobuf3Parser.RULE_enumName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldName(): FieldNameContext {
		let _localctx: FieldNameContext = new FieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Protobuf3Parser.RULE_fieldName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oneofName(): OneofNameContext {
		let _localctx: OneofNameContext = new OneofNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Protobuf3Parser.RULE_oneofName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapName(): MapNameContext {
		let _localctx: MapNameContext = new MapNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Protobuf3Parser.RULE_mapName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public serviceName(): ServiceNameContext {
		let _localctx: ServiceNameContext = new ServiceNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Protobuf3Parser.RULE_serviceName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rpcName(): RpcNameContext {
		let _localctx: RpcNameContext = new RpcNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Protobuf3Parser.RULE_rpcName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public messageType(): MessageTypeContext {
		let _localctx: MessageTypeContext = new MessageTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Protobuf3Parser.RULE_messageType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.DOT) {
				{
				this.state = 437;
				this.match(Protobuf3Parser.DOT);
				}
			}

			this.state = 445;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 440;
					this.ident();
					this.state = 441;
					this.match(Protobuf3Parser.DOT);
					}
					}
				}
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			this.state = 448;
			this.messageName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumType(): EnumTypeContext {
		let _localctx: EnumTypeContext = new EnumTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Protobuf3Parser.RULE_enumType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.DOT) {
				{
				this.state = 450;
				this.match(Protobuf3Parser.DOT);
				}
			}

			this.state = 458;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 453;
					this.ident();
					this.state = 454;
					this.match(Protobuf3Parser.DOT);
					}
					}
				}
				this.state = 460;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			this.state = 461;
			this.enumName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intLit(): IntLitContext {
		let _localctx: IntLitContext = new IntLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Protobuf3Parser.RULE_intLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.match(Protobuf3Parser.INT_LIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public strLit(): StrLitContext {
		let _localctx: StrLitContext = new StrLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Protobuf3Parser.RULE_strLit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			_la = this._input.LA(1);
			if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Protobuf3Parser.PROTO3_LIT_SINGLE - 34)) | (1 << (Protobuf3Parser.PROTO3_LIT_DOBULE - 34)) | (1 << (Protobuf3Parser.STR_LIT - 34)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolLit(): BoolLitContext {
		let _localctx: BoolLitContext = new BoolLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Protobuf3Parser.RULE_boolLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.match(Protobuf3Parser.BOOL_LIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatLit(): FloatLitContext {
		let _localctx: FloatLitContext = new FloatLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Protobuf3Parser.RULE_floatLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.match(Protobuf3Parser.FLOAT_LIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keywords(): KeywordsContext {
		let _localctx: KeywordsContext = new KeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Protobuf3Parser.RULE_keywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03<\u01DC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02o\n\x02\f\x02" +
		"\x0E\x02r\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x05\x04{\n\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\x90\n\x07\x05\x07\x92\n\x07\x03\b\x05" +
		"\b\x95\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x9F\n" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t\xA6\n\t\f\t\x0E\t\xA9\v\t\x03\n" +
		"\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07" +
		"\f\xB7\n\f\f\f\x0E\f\xBA\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x05\r\xC6\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\xD7\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xEE\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x05\x11\xF3\n\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x07\x12\xFA\n\x12\f\x12\x0E\x12\xFD\v\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x05\x13\u0103\n\x13\x05\x13\u0105\n\x13\x03\x14\x03\x14\x03" +
		"\x14\x07\x14\u010A\n\x14\f\x14\x0E\x14\u010D\v\x14\x03\x15\x03\x15\x03" +
		"\x15\x05\x15\u0112\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x07\x17\u011A\n\x17\f\x17\x0E\x17\u011D\v\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u0124\n\x18\x03\x19\x03\x19\x03\x19\x05\x19\u0129" +
		"\n\x19\x03\x19\x03\x19\x05\x19\u012D\n\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x07\x1A\u0135\n\x1A\f\x1A\x0E\x1A\u0138\v\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x07\x1D\u0146\n\x1D\f\x1D\x0E\x1D\u0149\v\x1D\x03" +
		"\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u0155\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u015B" +
		"\n\x1F\f\x1F\x0E\x1F\u015E\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x05 \u0165" +
		"\n \x03!\x03!\x03!\x03!\x05!\u016B\n!\x03!\x03!\x03!\x03!\x03!\x05!\u0172" +
		"\n!\x03!\x03!\x03!\x03!\x03!\x07!\u0179\n!\f!\x0E!\u017C\v!\x03!\x03!" +
		"\x05!\u0180\n!\x03\"\x03\"\x05\"\u0184\n\"\x03\"\x03\"\x05\"\u0188\n\"" +
		"\x03\"\x03\"\x03\"\x03\"\x05\"\u018E\n\"\x03#\x03#\x03#\x03#\x03#\x07" +
		"#\u0195\n#\f#\x0E#\u0198\v#\x03#\x03#\x03$\x03$\x03%\x03%\x05%\u01A0\n" +
		"%\x03&\x03&\x03&\x07&\u01A5\n&\f&\x0E&\u01A8\v&\x03\'\x03\'\x03(\x03(" +
		"\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x05.\u01B9\n." +
		"\x03.\x03.\x03.\x07.\u01BE\n.\f.\x0E.\u01C1\v.\x03.\x03.\x03/\x05/\u01C6" +
		"\n/\x03/\x03/\x03/\x07/\u01CB\n/\f/\x0E/\u01CE\v/\x03/\x03/\x030\x030" +
		"\x031\x031\x032\x032\x033\x033\x034\x034\x034\x02\x02\x025\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02\x02\b\x03\x02$%\x03\x02\x05\x06\x03\x02\f\x17\x03\x0234\x04\x02" +
		"$%55\x04\x02\x03#66\x02\u01F3\x02h\x03\x02\x02\x02\x04s\x03\x02\x02\x02" +
		"\x06x\x03\x02\x02\x02\b\x7F\x03\x02\x02\x02\n\x83\x03\x02\x02\x02\f\x91" +
		"\x03\x02\x02\x02\x0E\x94\x03\x02\x02\x02\x10\xA2\x03\x02\x02\x02\x12\xAA" +
		"\x03\x02\x02\x02\x14\xAE\x03\x02\x02\x02\x16\xB0\x03\x02\x02\x02\x18\xBD" +
		"\x03\x02\x02\x02\x1A\xC9\x03\x02\x02\x02\x1C\xDA\x03\x02\x02\x02\x1E\xED" +
		"\x03\x02\x02\x02 \xEF\x03\x02\x02\x02\"\xF6\x03\x02\x02\x02$\xFE\x03\x02" +
		"\x02\x02&\u0106\x03\x02\x02\x02(\u0111\x03\x02\x02\x02*\u0113\x03\x02" +
		"\x02\x02,\u0117\x03\x02\x02\x02.\u0123\x03\x02\x02\x020\u0125\x03\x02" +
		"\x02\x022\u0130\x03\x02\x02\x024\u013B\x03\x02\x02\x026\u013F\x03\x02" +
		"\x02\x028\u0143\x03\x02\x02\x02:\u0154\x03\x02\x02\x02<\u0156\x03\x02" +
		"\x02\x02>\u0164\x03\x02\x02\x02@\u0166\x03\x02\x02\x02B\u018D\x03\x02" +
		"\x02\x02D\u018F\x03\x02\x02\x02F\u019B\x03\x02\x02\x02H\u019F\x03\x02" +
		"\x02\x02J\u01A1\x03\x02\x02\x02L\u01A9\x03\x02\x02\x02N\u01AB\x03\x02" +
		"\x02\x02P\u01AD\x03\x02\x02\x02R\u01AF\x03\x02\x02\x02T\u01B1\x03\x02" +
		"\x02\x02V\u01B3\x03\x02\x02\x02X\u01B5\x03\x02\x02\x02Z\u01B8\x03\x02" +
		"\x02\x02\\\u01C5\x03\x02\x02\x02^\u01D1\x03\x02\x02\x02`\u01D3\x03\x02" +
		"\x02\x02b\u01D5\x03\x02\x02\x02d\u01D7\x03\x02\x02\x02f\u01D9\x03\x02" +
		"\x02\x02hp\x05\x04\x03\x02io\x05\x06\x04\x02jo\x05\b\x05\x02ko\x05\n\x06" +
		"\x02lo\x05(\x15\x02mo\x05F$\x02ni\x03\x02\x02\x02nj\x03\x02\x02\x02nk" +
		"\x03\x02\x02\x02nl\x03\x02\x02\x02nm\x03\x02\x02\x02or\x03\x02\x02\x02" +
		"pn\x03\x02\x02\x02pq\x03\x02\x02\x02q\x03\x03\x02\x02\x02rp\x03\x02\x02" +
		"\x02st\x07\x03\x02\x02tu\x07\'\x02\x02uv\t\x02\x02\x02vw\x07&\x02\x02" +
		"w\x05\x03\x02\x02\x02xz\x07\x04\x02\x02y{\t\x03\x02\x02zy\x03\x02\x02" +
		"\x02z{\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x05`1\x02}~\x07&\x02\x02~\x07" +
		"\x03\x02\x02\x02\x7F\x80\x07\x07\x02\x02\x80\x81\x05J&\x02\x81\x82\x07" +
		"&\x02\x02\x82\t\x03\x02\x02\x02\x83\x84\x07\b\x02\x02\x84\x85\x05\f\x07" +
		"\x02\x85\x86\x07\'\x02\x02\x86\x87\x05B\"\x02\x87\x88\x07&\x02\x02\x88" +
		"\v\x03\x02\x02\x02\x89\x92\x05J&\x02\x8A\x8B\x07(\x02\x02\x8B\x8C\x05" +
		"J&\x02\x8C\x8F\x07)\x02\x02\x8D\x8E\x070\x02\x02\x8E\x90\x05J&\x02\x8F" +
		"\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x92\x03\x02\x02\x02\x91" +
		"\x89\x03\x02\x02\x02\x91\x8A\x03\x02\x02\x02\x92\r\x03\x02\x02\x02\x93" +
		"\x95\x07\t\x02\x02\x94\x93\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95" +
		"\x96\x03\x02\x02\x02\x96\x97\x05\x1E\x10\x02\x97\x98\x05P)\x02\x98\x99" +
		"\x07\'\x02\x02\x99\x9E\x05\x14\v\x02\x9A\x9B\x07*\x02\x02\x9B\x9C\x05" +
		"\x10\t\x02\x9C\x9D\x07+\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\x9A\x03\x02" +
		"\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x07&" +
		"\x02\x02\xA1\x0F\x03\x02\x02\x02\xA2\xA7\x05\x12\n\x02\xA3\xA4\x071\x02" +
		"\x02\xA4\xA6\x05\x12\n\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA9\x03\x02\x02" +
		"\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\x11\x03\x02\x02" +
		"\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAB\x05\f\x07\x02\xAB\xAC\x07\'\x02\x02" +
		"\xAC\xAD\x05B\"\x02\xAD\x13\x03\x02\x02\x02\xAE\xAF\x05^0\x02\xAF\x15" +
		"\x03\x02\x02\x02\xB0\xB1\x07\n\x02\x02\xB1\xB2\x05R*\x02\xB2\xB8\x07," +
		"\x02\x02\xB3\xB7\x05\n\x06\x02\xB4\xB7\x05\x18\r\x02\xB5\xB7\x05F$\x02" +
		"\xB6\xB3\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB5\x03\x02\x02\x02" +
		"\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02" +
		"\xB9\xBB\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBC\x07-\x02\x02" +
		"\xBC\x17\x03\x02\x02\x02\xBD\xBE\x05\x1E\x10\x02\xBE\xBF\x05P)\x02\xBF" +
		"\xC0\x07\'\x02\x02\xC0\xC5\x05\x14\v\x02\xC1\xC2\x07*\x02\x02\xC2\xC3" +
		"\x05\x10\t\x02\xC3\xC4\x07+\x02\x02\xC4\xC6\x03\x02\x02\x02\xC5\xC1\x03" +
		"\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x07" +
		"&\x02\x02\xC8\x19\x03\x02\x02\x02\xC9\xCA\x07\v\x02\x02\xCA\xCB\x07.\x02" +
		"\x02\xCB\xCC\x05\x1C\x0F\x02\xCC\xCD\x071\x02\x02\xCD\xCE\x05\x1E\x10" +
		"\x02\xCE\xCF\x07/\x02\x02\xCF\xD0\x05T+\x02\xD0\xD1\x07\'\x02\x02\xD1" +
		"\xD6\x05\x14\v\x02\xD2\xD3\x07*\x02\x02\xD3\xD4\x05\x10\t\x02\xD4\xD5" +
		"\x07+\x02\x02\xD5\xD7\x03\x02\x02\x02\xD6\xD2\x03\x02\x02\x02\xD6\xD7" +
		"\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x07&\x02\x02\xD9\x1B" +
		"\x03\x02\x02\x02\xDA\xDB\t\x04\x02\x02\xDB\x1D\x03\x02\x02\x02\xDC\xEE" +
		"\x07\x18\x02\x02\xDD\xEE\x07\x19\x02\x02\xDE\xEE\x07\f\x02\x02\xDF\xEE" +
		"\x07\r\x02\x02\xE0\xEE\x07\x0E\x02\x02\xE1\xEE\x07\x0F\x02\x02\xE2\xEE" +
		"\x07\x10\x02\x02\xE3\xEE\x07\x11\x02\x02\xE4\xEE\x07\x12\x02\x02\xE5\xEE" +
		"\x07\x13\x02\x02\xE6\xEE\x07\x14\x02\x02\xE7\xEE\x07\x15\x02\x02\xE8\xEE" +
		"\x07\x16\x02\x02\xE9\xEE\x07\x17\x02\x02\xEA\xEE\x07\x1A\x02\x02\xEB\xEE" +
		"\x05Z.\x02\xEC\xEE\x05\\/\x02\xED\xDC\x03\x02\x02\x02\xED\xDD\x03\x02" +
		"\x02\x02\xED\xDE\x03\x02\x02\x02\xED\xDF\x03\x02\x02\x02\xED\xE0\x03\x02" +
		"\x02\x02\xED\xE1\x03\x02\x02\x02\xED\xE2\x03\x02\x02\x02\xED\xE3\x03\x02" +
		"\x02\x02\xED\xE4\x03\x02\x02\x02\xED\xE5\x03\x02\x02\x02\xED\xE6\x03\x02" +
		"\x02\x02\xED\xE7\x03\x02\x02\x02\xED\xE8\x03\x02\x02\x02\xED\xE9\x03\x02" +
		"\x02\x02\xED\xEA\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEC\x03\x02" +
		"\x02\x02\xEE\x1F\x03\x02\x02\x02\xEF\xF2\x07\x1B\x02\x02\xF0\xF3\x05\"" +
		"\x12\x02\xF1\xF3\x05&\x14\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF1\x03\x02" +
		"\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x07&\x02\x02\xF5!\x03\x02\x02" +
		"\x02\xF6\xFB\x05$\x13\x02\xF7\xF8\x071\x02\x02\xF8\xFA\x05$\x13\x02\xF9" +
		"\xF7\x03\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB" +
		"\xFC\x03\x02\x02\x02\xFC#\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE" +
		"\u0104\x05^0\x02\xFF\u0102\x07\x1C\x02\x02\u0100\u0103\x05^0\x02\u0101" +
		"\u0103\x07\x1D\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0101\x03\x02" +
		"\x02\x02\u0103\u0105\x03\x02\x02\x02\u0104\xFF\x03\x02\x02\x02\u0104\u0105" +
		"\x03\x02\x02\x02\u0105%\x03\x02\x02\x02\u0106\u010B\x05`1\x02\u0107\u0108" +
		"\x071\x02\x02\u0108\u010A\x05`1\x02\u0109\u0107\x03\x02\x02\x02\u010A" +
		"\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02" +
		"\x02\x02\u010C\'\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010E\u0112" +
		"\x056\x1C\x02\u010F\u0112\x05*\x16\x02\u0110\u0112\x05<\x1F\x02\u0111" +
		"\u010E\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0110\x03\x02" +
		"\x02\x02\u0112)\x03\x02\x02\x02\u0113\u0114\x07\x1E\x02\x02\u0114\u0115" +
		"\x05N(\x02\u0115\u0116\x05,\x17\x02\u0116+\x03\x02\x02\x02\u0117\u011B" +
		"\x07,\x02\x02\u0118\u011A\x05.\x18\x02\u0119\u0118\x03\x02\x02\x02\u011A" +
		"\u011D\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02" +
		"\x02\x02\u011C\u011E\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011E" +
		"\u011F\x07-\x02\x02\u011F-\x03\x02\x02\x02\u0120\u0124\x05\n\x06\x02\u0121" +
		"\u0124\x050\x19\x02\u0122\u0124\x05F$\x02\u0123\u0120\x03\x02\x02\x02" +
		"\u0123\u0121\x03\x02\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124/\x03\x02" +
		"\x02\x02\u0125\u0126\x05H%\x02\u0126\u0128\x07\'\x02\x02\u0127\u0129\x07" +
		"4\x02\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129" +
		"\u012A\x03\x02\x02\x02\u012A\u012C\x05^0\x02\u012B\u012D\x052\x1A\x02" +
		"\u012C\u012B\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x03" +
		"\x02\x02\x02\u012E\u012F\x07&\x02\x02\u012F1\x03\x02\x02\x02\u0130\u0131" +
		"\x07*\x02\x02\u0131\u0136\x054\x1B\x02\u0132\u0133\x071\x02\x02\u0133" +
		"\u0135\x054\x1B\x02\u0134\u0132\x03\x02\x02\x02\u0135\u0138\x03\x02\x02" +
		"\x02\u0136\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0139" +
		"\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0139\u013A\x07+\x02\x02" +
		"\u013A3\x03\x02\x02\x02\u013B\u013C\x05\f\x07\x02\u013C\u013D\x07\'\x02" +
		"\x02\u013D\u013E\x05B\"\x02\u013E5\x03\x02\x02\x02\u013F\u0140\x07\x1F" +
		"\x02\x02\u0140\u0141\x05L\'\x02\u0141\u0142\x058\x1D\x02\u01427\x03\x02" +
		"\x02\x02\u0143\u0147\x07,\x02\x02\u0144\u0146\x05:\x1E\x02\u0145\u0144" +
		"\x03\x02\x02\x02\u0146\u0149\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02" +
		"\u0147\u0148\x03\x02\x02\x02\u0148\u014A\x03\x02\x02\x02\u0149\u0147\x03" +
		"\x02\x02\x02\u014A\u014B\x07-\x02\x02\u014B9\x03\x02\x02\x02\u014C\u0155" +
		"\x05\x0E\b\x02\u014D\u0155\x05*\x16\x02\u014E\u0155\x056\x1C\x02\u014F" +
		"\u0155\x05\n\x06\x02\u0150\u0155\x05\x16\f\x02\u0151\u0155\x05\x1A\x0E" +
		"\x02\u0152\u0155\x05 \x11\x02\u0153\u0155\x05F$\x02\u0154\u014C\x03\x02" +
		"\x02\x02\u0154\u014D\x03\x02\x02\x02\u0154\u014E\x03\x02\x02\x02\u0154" +
		"\u014F\x03\x02\x02\x02\u0154\u0150\x03\x02\x02\x02\u0154\u0151\x03\x02" +
		"\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154\u0153\x03\x02\x02\x02\u0155" +
		";\x03\x02\x02\x02\u0156\u0157\x07 \x02\x02\u0157\u0158\x05V,\x02\u0158" +
		"\u015C\x07,\x02\x02\u0159\u015B\x05> \x02\u015A\u0159\x03\x02\x02\x02" +
		"\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03" +
		"\x02\x02\x02\u015D\u015F\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F" +
		"\u0160\x07-\x02\x02\u0160=\x03\x02\x02\x02\u0161\u0165\x05\n\x06\x02\u0162" +
		"\u0165\x05@!\x02\u0163\u0165\x05F$\x02\u0164\u0161\x03\x02\x02\x02\u0164" +
		"\u0162\x03\x02\x02\x02\u0164\u0163\x03\x02\x02\x02\u0165?\x03\x02\x02" +
		"\x02\u0166\u0167\x07!\x02\x02\u0167\u0168\x05X-\x02\u0168\u016A\x07(\x02" +
		"\x02\u0169\u016B\x07\"\x02\x02\u016A\u0169\x03\x02\x02\x02\u016A\u016B" +
		"\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016D\x05Z.\x02\u016D" +
		"\u016E\x07)\x02\x02\u016E\u016F\x07#\x02\x02\u016F\u0171\x07(\x02\x02" +
		"\u0170\u0172\x07\"\x02\x02\u0171\u0170\x03\x02\x02\x02\u0171\u0172\x03" +
		"\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174\x05Z.\x02\u0174\u017F" +
		"\x07)\x02\x02\u0175\u017A\x07,\x02\x02\u0176\u0179\x05\n\x06\x02\u0177" +
		"\u0179\x05F$\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0177\x03\x02\x02\x02" +
		"\u0179\u017C\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017A\u017B\x03" +
		"\x02\x02\x02\u017B\u017D\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017D" +
		"\u0180\x07-\x02\x02\u017E\u0180\x07&\x02\x02\u017F\u0175\x03\x02\x02\x02" +
		"\u017F\u017E\x03\x02\x02\x02\u0180A\x03\x02\x02\x02\u0181\u018E\x05J&" +
		"\x02\u0182\u0184\t\x05\x02\x02\u0183\u0182\x03\x02\x02\x02\u0183\u0184" +
		"\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u018E\x05^0\x02\u0186" +
		"\u0188\t\x05\x02\x02\u0187\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02" +
		"\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018E\x05d3\x02\u018A\u018E\x05" +
		"`1\x02\u018B\u018E\x05b2\x02\u018C\u018E\x05D#\x02\u018D\u0181\x03\x02" +
		"\x02\x02\u018D\u0183\x03\x02\x02\x02\u018D\u0187\x03\x02\x02\x02\u018D" +
		"\u018A\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018D\u018C\x03\x02" +
		"\x02\x02\u018EC\x03\x02\x02\x02\u018F\u0196\x07,\x02\x02\u0190\u0191\x05" +
		"H%\x02\u0191\u0192\x072\x02\x02\u0192\u0193\x05B\"\x02\u0193\u0195\x03" +
		"\x02\x02\x02\u0194\u0190\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196" +
		"\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0199\x03\x02" +
		"\x02\x02\u0198\u0196\x03\x02\x02\x02\u0199\u019A\x07-\x02\x02\u019AE\x03" +
		"\x02\x02\x02\u019B\u019C\x07&\x02\x02\u019CG\x03\x02\x02\x02\u019D\u01A0" +
		"\x079\x02\x02\u019E\u01A0\x05f4\x02\u019F\u019D\x03\x02\x02\x02\u019F" +
		"\u019E\x03\x02\x02\x02\u01A0I\x03\x02\x02\x02\u01A1\u01A6\x05H%\x02\u01A2" +
		"\u01A3\x070\x02\x02\u01A3\u01A5\x05H%\x02\u01A4\u01A2\x03\x02\x02\x02" +
		"\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A7\x03" +
		"\x02\x02\x02\u01A7K\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9" +
		"\u01AA\x05H%\x02\u01AAM\x03\x02\x02\x02\u01AB\u01AC\x05H%\x02\u01ACO\x03" +
		"\x02\x02\x02\u01AD\u01AE\x05H%\x02\u01AEQ\x03\x02\x02\x02\u01AF\u01B0" +
		"\x05H%\x02\u01B0S\x03\x02\x02\x02\u01B1\u01B2\x05H%\x02\u01B2U\x03\x02" +
		"\x02\x02\u01B3\u01B4\x05H%\x02\u01B4W\x03\x02\x02\x02\u01B5\u01B6\x05" +
		"H%\x02\u01B6Y\x03\x02\x02\x02\u01B7\u01B9\x070\x02\x02\u01B8\u01B7\x03" +
		"\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BF\x03\x02\x02\x02\u01BA" +
		"\u01BB\x05H%\x02\u01BB\u01BC\x070\x02\x02\u01BC\u01BE\x03\x02\x02\x02" +
		"\u01BD\u01BA\x03\x02\x02\x02\u01BE\u01C1\x03\x02\x02\x02\u01BF\u01BD\x03" +
		"\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1" +
		"\u01BF\x03\x02\x02\x02\u01C2\u01C3\x05L\'\x02\u01C3[\x03\x02\x02\x02\u01C4" +
		"\u01C6\x070\x02\x02\u01C5\u01C4\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02" +
		"\x02\u01C6\u01CC\x03\x02\x02\x02\u01C7\u01C8\x05H%\x02\u01C8\u01C9\x07" +
		"0\x02\x02\u01C9\u01CB\x03\x02\x02\x02\u01CA\u01C7\x03\x02\x02\x02\u01CB" +
		"\u01CE\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02\u01CC\u01CD\x03\x02" +
		"\x02\x02\u01CD\u01CF\x03\x02\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CF" +
		"\u01D0\x05N(\x02\u01D0]\x03\x02\x02\x02\u01D1\u01D2\x078\x02\x02\u01D2" +
		"_\x03\x02\x02\x02\u01D3\u01D4\t\x06\x02\x02\u01D4a\x03\x02\x02\x02\u01D5" +
		"\u01D6\x076\x02\x02\u01D6c\x03\x02\x02\x02\u01D7\u01D8\x077\x02\x02\u01D8" +
		"e\x03\x02\x02\x02\u01D9\u01DA\t\x07\x02\x02\u01DAg\x03\x02\x02\x02-np" +
		"z\x8F\x91\x94\x9E\xA7\xB6\xB8\xC5\xD6\xED\xF2\xFB\u0102\u0104\u010B\u0111" +
		"\u011B\u0123\u0128\u012C\u0136\u0147\u0154\u015C\u0164\u016A\u0171\u0178" +
		"\u017A\u017F\u0183\u0187\u018D\u0196\u019F\u01A6\u01B8\u01BF\u01C5\u01CC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Protobuf3Parser.__ATN) {
			Protobuf3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Protobuf3Parser._serializedATN));
		}

		return Protobuf3Parser.__ATN;
	}

}

export class ProtoContext extends ParserRuleContext {
	public syntax(): SyntaxContext {
		return this.getRuleContext(0, SyntaxContext);
	}
	public importStatement(): ImportStatementContext[];
	public importStatement(i: number): ImportStatementContext;
	public importStatement(i?: number): ImportStatementContext | ImportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportStatementContext);
		} else {
			return this.getRuleContext(i, ImportStatementContext);
		}
	}
	public packageStatement(): PackageStatementContext[];
	public packageStatement(i: number): PackageStatementContext;
	public packageStatement(i?: number): PackageStatementContext | PackageStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageStatementContext);
		} else {
			return this.getRuleContext(i, PackageStatementContext);
		}
	}
	public optionStatement(): OptionStatementContext[];
	public optionStatement(i: number): OptionStatementContext;
	public optionStatement(i?: number): OptionStatementContext | OptionStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionStatementContext);
		} else {
			return this.getRuleContext(i, OptionStatementContext);
		}
	}
	public topLevelDef(): TopLevelDefContext[];
	public topLevelDef(i: number): TopLevelDefContext;
	public topLevelDef(i?: number): TopLevelDefContext | TopLevelDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelDefContext);
		} else {
			return this.getRuleContext(i, TopLevelDefContext);
		}
	}
	public emptyStatement(): EmptyStatementContext[];
	public emptyStatement(i: number): EmptyStatementContext;
	public emptyStatement(i?: number): EmptyStatementContext | EmptyStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatementContext);
		} else {
			return this.getRuleContext(i, EmptyStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_proto; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterProto) {
			listener.enterProto(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitProto) {
			listener.exitProto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitProto) {
			return visitor.visitProto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SyntaxContext extends ParserRuleContext {
	public SYNTAX(): TerminalNode { return this.getToken(Protobuf3Parser.SYNTAX, 0); }
	public EQ(): TerminalNode { return this.getToken(Protobuf3Parser.EQ, 0); }
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public PROTO3_LIT_SINGLE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.PROTO3_LIT_SINGLE, 0); }
	public PROTO3_LIT_DOBULE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.PROTO3_LIT_DOBULE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_syntax; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterSyntax) {
			listener.enterSyntax(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitSyntax) {
			listener.exitSyntax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitSyntax) {
			return visitor.visitSyntax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Protobuf3Parser.IMPORT, 0); }
	public strLit(): StrLitContext {
		return this.getRuleContext(0, StrLitContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public WEAK(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.WEAK, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.PUBLIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_importStatement; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterImportStatement) {
			listener.enterImportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitImportStatement) {
			listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageStatementContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(Protobuf3Parser.PACKAGE, 0); }
	public fullIdent(): FullIdentContext {
		return this.getRuleContext(0, FullIdentContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_packageStatement; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterPackageStatement) {
			listener.enterPackageStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitPackageStatement) {
			listener.exitPackageStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitPackageStatement) {
			return visitor.visitPackageStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionStatementContext extends ParserRuleContext {
	public OPTION(): TerminalNode { return this.getToken(Protobuf3Parser.OPTION, 0); }
	public optionName(): OptionNameContext {
		return this.getRuleContext(0, OptionNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(Protobuf3Parser.EQ, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_optionStatement; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterOptionStatement) {
			listener.enterOptionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitOptionStatement) {
			listener.exitOptionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitOptionStatement) {
			return visitor.visitOptionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionNameContext extends ParserRuleContext {
	public fullIdent(): FullIdentContext[];
	public fullIdent(i: number): FullIdentContext;
	public fullIdent(i?: number): FullIdentContext | FullIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FullIdentContext);
		} else {
			return this.getRuleContext(i, FullIdentContext);
		}
	}
	public LP(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.LP, 0); }
	public RP(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RP, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_optionName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterOptionName) {
			listener.enterOptionName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitOptionName) {
			listener.exitOptionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitOptionName) {
			return visitor.visitOptionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(Protobuf3Parser.EQ, 0); }
	public fieldNumber(): FieldNumberContext {
		return this.getRuleContext(0, FieldNumberContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public REPEATED(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.REPEATED, 0); }
	public LB(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.LB, 0); }
	public fieldOptions(): FieldOptionsContext | undefined {
		return this.tryGetRuleContext(0, FieldOptionsContext);
	}
	public RB(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_field; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldOptionsContext extends ParserRuleContext {
	public fieldOption(): FieldOptionContext[];
	public fieldOption(i: number): FieldOptionContext;
	public fieldOption(i?: number): FieldOptionContext | FieldOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldOptionContext);
		} else {
			return this.getRuleContext(i, FieldOptionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.COMMA);
		} else {
			return this.getToken(Protobuf3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_fieldOptions; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterFieldOptions) {
			listener.enterFieldOptions(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitFieldOptions) {
			listener.exitFieldOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitFieldOptions) {
			return visitor.visitFieldOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldOptionContext extends ParserRuleContext {
	public optionName(): OptionNameContext {
		return this.getRuleContext(0, OptionNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(Protobuf3Parser.EQ, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_fieldOption; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterFieldOption) {
			listener.enterFieldOption(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitFieldOption) {
			listener.exitFieldOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitFieldOption) {
			return visitor.visitFieldOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldNumberContext extends ParserRuleContext {
	public intLit(): IntLitContext {
		return this.getRuleContext(0, IntLitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_fieldNumber; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterFieldNumber) {
			listener.enterFieldNumber(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitFieldNumber) {
			listener.exitFieldNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitFieldNumber) {
			return visitor.visitFieldNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OneofContext extends ParserRuleContext {
	public ONEOF(): TerminalNode { return this.getToken(Protobuf3Parser.ONEOF, 0); }
	public oneofName(): OneofNameContext {
		return this.getRuleContext(0, OneofNameContext);
	}
	public LC(): TerminalNode { return this.getToken(Protobuf3Parser.LC, 0); }
	public RC(): TerminalNode { return this.getToken(Protobuf3Parser.RC, 0); }
	public optionStatement(): OptionStatementContext[];
	public optionStatement(i: number): OptionStatementContext;
	public optionStatement(i?: number): OptionStatementContext | OptionStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionStatementContext);
		} else {
			return this.getRuleContext(i, OptionStatementContext);
		}
	}
	public oneofField(): OneofFieldContext[];
	public oneofField(i: number): OneofFieldContext;
	public oneofField(i?: number): OneofFieldContext | OneofFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OneofFieldContext);
		} else {
			return this.getRuleContext(i, OneofFieldContext);
		}
	}
	public emptyStatement(): EmptyStatementContext[];
	public emptyStatement(i: number): EmptyStatementContext;
	public emptyStatement(i?: number): EmptyStatementContext | EmptyStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatementContext);
		} else {
			return this.getRuleContext(i, EmptyStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_oneof; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterOneof) {
			listener.enterOneof(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitOneof) {
			listener.exitOneof(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitOneof) {
			return visitor.visitOneof(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OneofFieldContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(Protobuf3Parser.EQ, 0); }
	public fieldNumber(): FieldNumberContext {
		return this.getRuleContext(0, FieldNumberContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public LB(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.LB, 0); }
	public fieldOptions(): FieldOptionsContext | undefined {
		return this.tryGetRuleContext(0, FieldOptionsContext);
	}
	public RB(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_oneofField; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterOneofField) {
			listener.enterOneofField(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitOneofField) {
			listener.exitOneofField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitOneofField) {
			return visitor.visitOneofField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapFieldContext extends ParserRuleContext {
	public MAP(): TerminalNode { return this.getToken(Protobuf3Parser.MAP, 0); }
	public LT(): TerminalNode { return this.getToken(Protobuf3Parser.LT, 0); }
	public keyType(): KeyTypeContext {
		return this.getRuleContext(0, KeyTypeContext);
	}
	public COMMA(): TerminalNode { return this.getToken(Protobuf3Parser.COMMA, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public GT(): TerminalNode { return this.getToken(Protobuf3Parser.GT, 0); }
	public mapName(): MapNameContext {
		return this.getRuleContext(0, MapNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(Protobuf3Parser.EQ, 0); }
	public fieldNumber(): FieldNumberContext {
		return this.getRuleContext(0, FieldNumberContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public LB(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.LB, 0); }
	public fieldOptions(): FieldOptionsContext | undefined {
		return this.tryGetRuleContext(0, FieldOptionsContext);
	}
	public RB(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_mapField; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMapField) {
			listener.enterMapField(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMapField) {
			listener.exitMapField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMapField) {
			return visitor.visitMapField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyTypeContext extends ParserRuleContext {
	public INT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.INT32, 0); }
	public INT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.INT64, 0); }
	public UINT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.UINT32, 0); }
	public UINT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.UINT64, 0); }
	public SINT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SINT32, 0); }
	public SINT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SINT64, 0); }
	public FIXED32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FIXED32, 0); }
	public FIXED64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FIXED64, 0); }
	public SFIXED32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SFIXED32, 0); }
	public SFIXED64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SFIXED64, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.BOOL, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_keyType; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterKeyType) {
			listener.enterKeyType(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitKeyType) {
			listener.exitKeyType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitKeyType) {
			return visitor.visitKeyType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.DOUBLE, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FLOAT, 0); }
	public INT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.INT32, 0); }
	public INT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.INT64, 0); }
	public UINT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.UINT32, 0); }
	public UINT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.UINT64, 0); }
	public SINT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SINT32, 0); }
	public SINT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SINT64, 0); }
	public FIXED32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FIXED32, 0); }
	public FIXED64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FIXED64, 0); }
	public SFIXED32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SFIXED32, 0); }
	public SFIXED64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SFIXED64, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.BOOL, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.STRING, 0); }
	public BYTES(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.BYTES, 0); }
	public messageType(): MessageTypeContext | undefined {
		return this.tryGetRuleContext(0, MessageTypeContext);
	}
	public enumType(): EnumTypeContext | undefined {
		return this.tryGetRuleContext(0, EnumTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_type_; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedContext extends ParserRuleContext {
	public RESERVED(): TerminalNode { return this.getToken(Protobuf3Parser.RESERVED, 0); }
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public ranges(): RangesContext | undefined {
		return this.tryGetRuleContext(0, RangesContext);
	}
	public reservedFieldNames(): ReservedFieldNamesContext | undefined {
		return this.tryGetRuleContext(0, ReservedFieldNamesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_reserved; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterReserved) {
			listener.enterReserved(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitReserved) {
			listener.exitReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitReserved) {
			return visitor.visitReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangesContext extends ParserRuleContext {
	public range_(): Range_Context[];
	public range_(i: number): Range_Context;
	public range_(i?: number): Range_Context | Range_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Range_Context);
		} else {
			return this.getRuleContext(i, Range_Context);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.COMMA);
		} else {
			return this.getToken(Protobuf3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_ranges; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterRanges) {
			listener.enterRanges(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitRanges) {
			listener.exitRanges(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitRanges) {
			return visitor.visitRanges(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Range_Context extends ParserRuleContext {
	public intLit(): IntLitContext[];
	public intLit(i: number): IntLitContext;
	public intLit(i?: number): IntLitContext | IntLitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntLitContext);
		} else {
			return this.getRuleContext(i, IntLitContext);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.TO, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.MAX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_range_; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterRange_) {
			listener.enterRange_(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitRange_) {
			listener.exitRange_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitRange_) {
			return visitor.visitRange_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedFieldNamesContext extends ParserRuleContext {
	public strLit(): StrLitContext[];
	public strLit(i: number): StrLitContext;
	public strLit(i?: number): StrLitContext | StrLitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StrLitContext);
		} else {
			return this.getRuleContext(i, StrLitContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.COMMA);
		} else {
			return this.getToken(Protobuf3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_reservedFieldNames; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterReservedFieldNames) {
			listener.enterReservedFieldNames(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitReservedFieldNames) {
			listener.exitReservedFieldNames(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitReservedFieldNames) {
			return visitor.visitReservedFieldNames(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelDefContext extends ParserRuleContext {
	public messageDef(): MessageDefContext | undefined {
		return this.tryGetRuleContext(0, MessageDefContext);
	}
	public enumDef(): EnumDefContext | undefined {
		return this.tryGetRuleContext(0, EnumDefContext);
	}
	public serviceDef(): ServiceDefContext | undefined {
		return this.tryGetRuleContext(0, ServiceDefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_topLevelDef; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterTopLevelDef) {
			listener.enterTopLevelDef(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitTopLevelDef) {
			listener.exitTopLevelDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitTopLevelDef) {
			return visitor.visitTopLevelDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(Protobuf3Parser.ENUM, 0); }
	public enumName(): EnumNameContext {
		return this.getRuleContext(0, EnumNameContext);
	}
	public enumBody(): EnumBodyContext {
		return this.getRuleContext(0, EnumBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_enumDef; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEnumDef) {
			listener.enterEnumDef(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEnumDef) {
			listener.exitEnumDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumDef) {
			return visitor.visitEnumDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	public LC(): TerminalNode { return this.getToken(Protobuf3Parser.LC, 0); }
	public RC(): TerminalNode { return this.getToken(Protobuf3Parser.RC, 0); }
	public enumElement(): EnumElementContext[];
	public enumElement(i: number): EnumElementContext;
	public enumElement(i?: number): EnumElementContext | EnumElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumElementContext);
		} else {
			return this.getRuleContext(i, EnumElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_enumBody; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEnumBody) {
			listener.enterEnumBody(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEnumBody) {
			listener.exitEnumBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumBody) {
			return visitor.visitEnumBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumElementContext extends ParserRuleContext {
	public optionStatement(): OptionStatementContext | undefined {
		return this.tryGetRuleContext(0, OptionStatementContext);
	}
	public enumField(): EnumFieldContext | undefined {
		return this.tryGetRuleContext(0, EnumFieldContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_enumElement; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEnumElement) {
			listener.enterEnumElement(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEnumElement) {
			listener.exitEnumElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumElement) {
			return visitor.visitEnumElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumFieldContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public EQ(): TerminalNode { return this.getToken(Protobuf3Parser.EQ, 0); }
	public intLit(): IntLitContext {
		return this.getRuleContext(0, IntLitContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.MINUS, 0); }
	public enumValueOptions(): EnumValueOptionsContext | undefined {
		return this.tryGetRuleContext(0, EnumValueOptionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_enumField; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEnumField) {
			listener.enterEnumField(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEnumField) {
			listener.exitEnumField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumField) {
			return visitor.visitEnumField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueOptionsContext extends ParserRuleContext {
	public LB(): TerminalNode { return this.getToken(Protobuf3Parser.LB, 0); }
	public enumValueOption(): EnumValueOptionContext[];
	public enumValueOption(i: number): EnumValueOptionContext;
	public enumValueOption(i?: number): EnumValueOptionContext | EnumValueOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumValueOptionContext);
		} else {
			return this.getRuleContext(i, EnumValueOptionContext);
		}
	}
	public RB(): TerminalNode { return this.getToken(Protobuf3Parser.RB, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.COMMA);
		} else {
			return this.getToken(Protobuf3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_enumValueOptions; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEnumValueOptions) {
			listener.enterEnumValueOptions(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEnumValueOptions) {
			listener.exitEnumValueOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumValueOptions) {
			return visitor.visitEnumValueOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueOptionContext extends ParserRuleContext {
	public optionName(): OptionNameContext {
		return this.getRuleContext(0, OptionNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(Protobuf3Parser.EQ, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_enumValueOption; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEnumValueOption) {
			listener.enterEnumValueOption(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEnumValueOption) {
			listener.exitEnumValueOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumValueOption) {
			return visitor.visitEnumValueOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageDefContext extends ParserRuleContext {
	public MESSAGE(): TerminalNode { return this.getToken(Protobuf3Parser.MESSAGE, 0); }
	public messageName(): MessageNameContext {
		return this.getRuleContext(0, MessageNameContext);
	}
	public messageBody(): MessageBodyContext {
		return this.getRuleContext(0, MessageBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_messageDef; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMessageDef) {
			listener.enterMessageDef(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMessageDef) {
			listener.exitMessageDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMessageDef) {
			return visitor.visitMessageDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageBodyContext extends ParserRuleContext {
	public LC(): TerminalNode { return this.getToken(Protobuf3Parser.LC, 0); }
	public RC(): TerminalNode { return this.getToken(Protobuf3Parser.RC, 0); }
	public messageElement(): MessageElementContext[];
	public messageElement(i: number): MessageElementContext;
	public messageElement(i?: number): MessageElementContext | MessageElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MessageElementContext);
		} else {
			return this.getRuleContext(i, MessageElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_messageBody; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMessageBody) {
			listener.enterMessageBody(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMessageBody) {
			listener.exitMessageBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMessageBody) {
			return visitor.visitMessageBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageElementContext extends ParserRuleContext {
	public field(): FieldContext | undefined {
		return this.tryGetRuleContext(0, FieldContext);
	}
	public enumDef(): EnumDefContext | undefined {
		return this.tryGetRuleContext(0, EnumDefContext);
	}
	public messageDef(): MessageDefContext | undefined {
		return this.tryGetRuleContext(0, MessageDefContext);
	}
	public optionStatement(): OptionStatementContext | undefined {
		return this.tryGetRuleContext(0, OptionStatementContext);
	}
	public oneof(): OneofContext | undefined {
		return this.tryGetRuleContext(0, OneofContext);
	}
	public mapField(): MapFieldContext | undefined {
		return this.tryGetRuleContext(0, MapFieldContext);
	}
	public reserved(): ReservedContext | undefined {
		return this.tryGetRuleContext(0, ReservedContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_messageElement; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMessageElement) {
			listener.enterMessageElement(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMessageElement) {
			listener.exitMessageElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMessageElement) {
			return visitor.visitMessageElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceDefContext extends ParserRuleContext {
	public SERVICE(): TerminalNode { return this.getToken(Protobuf3Parser.SERVICE, 0); }
	public serviceName(): ServiceNameContext {
		return this.getRuleContext(0, ServiceNameContext);
	}
	public LC(): TerminalNode { return this.getToken(Protobuf3Parser.LC, 0); }
	public RC(): TerminalNode { return this.getToken(Protobuf3Parser.RC, 0); }
	public serviceElement(): ServiceElementContext[];
	public serviceElement(i: number): ServiceElementContext;
	public serviceElement(i?: number): ServiceElementContext | ServiceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ServiceElementContext);
		} else {
			return this.getRuleContext(i, ServiceElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_serviceDef; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterServiceDef) {
			listener.enterServiceDef(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitServiceDef) {
			listener.exitServiceDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitServiceDef) {
			return visitor.visitServiceDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceElementContext extends ParserRuleContext {
	public optionStatement(): OptionStatementContext | undefined {
		return this.tryGetRuleContext(0, OptionStatementContext);
	}
	public rpc(): RpcContext | undefined {
		return this.tryGetRuleContext(0, RpcContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_serviceElement; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterServiceElement) {
			listener.enterServiceElement(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitServiceElement) {
			listener.exitServiceElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitServiceElement) {
			return visitor.visitServiceElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RpcContext extends ParserRuleContext {
	public RPC(): TerminalNode { return this.getToken(Protobuf3Parser.RPC, 0); }
	public rpcName(): RpcNameContext {
		return this.getRuleContext(0, RpcNameContext);
	}
	public LP(): TerminalNode[];
	public LP(i: number): TerminalNode;
	public LP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.LP);
		} else {
			return this.getToken(Protobuf3Parser.LP, i);
		}
	}
	public messageType(): MessageTypeContext[];
	public messageType(i: number): MessageTypeContext;
	public messageType(i?: number): MessageTypeContext | MessageTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MessageTypeContext);
		} else {
			return this.getRuleContext(i, MessageTypeContext);
		}
	}
	public RP(): TerminalNode[];
	public RP(i: number): TerminalNode;
	public RP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.RP);
		} else {
			return this.getToken(Protobuf3Parser.RP, i);
		}
	}
	public RETURNS(): TerminalNode { return this.getToken(Protobuf3Parser.RETURNS, 0); }
	public LC(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.LC, 0); }
	public RC(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RC, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SEMI, 0); }
	public STREAM(): TerminalNode[];
	public STREAM(i: number): TerminalNode;
	public STREAM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.STREAM);
		} else {
			return this.getToken(Protobuf3Parser.STREAM, i);
		}
	}
	public optionStatement(): OptionStatementContext[];
	public optionStatement(i: number): OptionStatementContext;
	public optionStatement(i?: number): OptionStatementContext | OptionStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionStatementContext);
		} else {
			return this.getRuleContext(i, OptionStatementContext);
		}
	}
	public emptyStatement(): EmptyStatementContext[];
	public emptyStatement(i: number): EmptyStatementContext;
	public emptyStatement(i?: number): EmptyStatementContext | EmptyStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatementContext);
		} else {
			return this.getRuleContext(i, EmptyStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_rpc; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterRpc) {
			listener.enterRpc(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitRpc) {
			listener.exitRpc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitRpc) {
			return visitor.visitRpc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public fullIdent(): FullIdentContext | undefined {
		return this.tryGetRuleContext(0, FullIdentContext);
	}
	public intLit(): IntLitContext | undefined {
		return this.tryGetRuleContext(0, IntLitContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.PLUS, 0); }
	public floatLit(): FloatLitContext | undefined {
		return this.tryGetRuleContext(0, FloatLitContext);
	}
	public strLit(): StrLitContext | undefined {
		return this.tryGetRuleContext(0, StrLitContext);
	}
	public boolLit(): BoolLitContext | undefined {
		return this.tryGetRuleContext(0, BoolLitContext);
	}
	public blockLit(): BlockLitContext | undefined {
		return this.tryGetRuleContext(0, BlockLitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_constant; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockLitContext extends ParserRuleContext {
	public LC(): TerminalNode { return this.getToken(Protobuf3Parser.LC, 0); }
	public RC(): TerminalNode { return this.getToken(Protobuf3Parser.RC, 0); }
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.COLON);
		} else {
			return this.getToken(Protobuf3Parser.COLON, i);
		}
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_blockLit; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterBlockLit) {
			listener.enterBlockLit(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitBlockLit) {
			listener.exitBlockLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitBlockLit) {
			return visitor.visitBlockLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.IDENTIFIER, 0); }
	public keywords(): KeywordsContext | undefined {
		return this.tryGetRuleContext(0, KeywordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_ident; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterIdent) {
			listener.enterIdent(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitIdent) {
			listener.exitIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitIdent) {
			return visitor.visitIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FullIdentContext extends ParserRuleContext {
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.DOT);
		} else {
			return this.getToken(Protobuf3Parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_fullIdent; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterFullIdent) {
			listener.enterFullIdent(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitFullIdent) {
			listener.exitFullIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitFullIdent) {
			return visitor.visitFullIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageNameContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_messageName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMessageName) {
			listener.enterMessageName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMessageName) {
			listener.exitMessageName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMessageName) {
			return visitor.visitMessageName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumNameContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_enumName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEnumName) {
			listener.enterEnumName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEnumName) {
			listener.exitEnumName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumName) {
			return visitor.visitEnumName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_fieldName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterFieldName) {
			listener.enterFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitFieldName) {
			listener.exitFieldName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitFieldName) {
			return visitor.visitFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OneofNameContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_oneofName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterOneofName) {
			listener.enterOneofName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitOneofName) {
			listener.exitOneofName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitOneofName) {
			return visitor.visitOneofName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapNameContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_mapName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMapName) {
			listener.enterMapName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMapName) {
			listener.exitMapName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMapName) {
			return visitor.visitMapName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceNameContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_serviceName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterServiceName) {
			listener.enterServiceName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitServiceName) {
			listener.exitServiceName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitServiceName) {
			return visitor.visitServiceName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RpcNameContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_rpcName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterRpcName) {
			listener.enterRpcName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitRpcName) {
			listener.exitRpcName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitRpcName) {
			return visitor.visitRpcName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageTypeContext extends ParserRuleContext {
	public messageName(): MessageNameContext {
		return this.getRuleContext(0, MessageNameContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.DOT);
		} else {
			return this.getToken(Protobuf3Parser.DOT, i);
		}
	}
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_messageType; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMessageType) {
			listener.enterMessageType(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMessageType) {
			listener.exitMessageType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitMessageType) {
			return visitor.visitMessageType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumTypeContext extends ParserRuleContext {
	public enumName(): EnumNameContext {
		return this.getRuleContext(0, EnumNameContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.DOT);
		} else {
			return this.getToken(Protobuf3Parser.DOT, i);
		}
	}
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_enumType; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEnumType) {
			listener.enterEnumType(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEnumType) {
			listener.exitEnumType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitEnumType) {
			return visitor.visitEnumType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntLitContext extends ParserRuleContext {
	public INT_LIT(): TerminalNode { return this.getToken(Protobuf3Parser.INT_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_intLit; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterIntLit) {
			listener.enterIntLit(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitIntLit) {
			listener.exitIntLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitIntLit) {
			return visitor.visitIntLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrLitContext extends ParserRuleContext {
	public STR_LIT(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.STR_LIT, 0); }
	public PROTO3_LIT_SINGLE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.PROTO3_LIT_SINGLE, 0); }
	public PROTO3_LIT_DOBULE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.PROTO3_LIT_DOBULE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_strLit; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterStrLit) {
			listener.enterStrLit(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitStrLit) {
			listener.exitStrLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitStrLit) {
			return visitor.visitStrLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolLitContext extends ParserRuleContext {
	public BOOL_LIT(): TerminalNode { return this.getToken(Protobuf3Parser.BOOL_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_boolLit; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterBoolLit) {
			listener.enterBoolLit(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitBoolLit) {
			listener.exitBoolLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitBoolLit) {
			return visitor.visitBoolLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatLitContext extends ParserRuleContext {
	public FLOAT_LIT(): TerminalNode { return this.getToken(Protobuf3Parser.FLOAT_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_floatLit; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterFloatLit) {
			listener.enterFloatLit(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitFloatLit) {
			listener.exitFloatLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitFloatLit) {
			return visitor.visitFloatLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordsContext extends ParserRuleContext {
	public SYNTAX(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SYNTAX, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.IMPORT, 0); }
	public WEAK(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.WEAK, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.PUBLIC, 0); }
	public PACKAGE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.PACKAGE, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.OPTION, 0); }
	public REPEATED(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.REPEATED, 0); }
	public ONEOF(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.ONEOF, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.MAP, 0); }
	public INT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.INT32, 0); }
	public INT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.INT64, 0); }
	public UINT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.UINT32, 0); }
	public UINT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.UINT64, 0); }
	public SINT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SINT32, 0); }
	public SINT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SINT64, 0); }
	public FIXED32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FIXED32, 0); }
	public FIXED64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FIXED64, 0); }
	public SFIXED32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SFIXED32, 0); }
	public SFIXED64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SFIXED64, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.BOOL, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.STRING, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.DOUBLE, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FLOAT, 0); }
	public BYTES(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.BYTES, 0); }
	public RESERVED(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RESERVED, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.TO, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.MAX, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.ENUM, 0); }
	public MESSAGE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.MESSAGE, 0); }
	public SERVICE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SERVICE, 0); }
	public RPC(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RPC, 0); }
	public STREAM(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.STREAM, 0); }
	public RETURNS(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RETURNS, 0); }
	public BOOL_LIT(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.BOOL_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_keywords; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterKeywords) {
			listener.enterKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitKeywords) {
			listener.exitKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Protobuf3Visitor<Result>): Result {
		if (visitor.visitKeywords) {
			return visitor.visitKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


